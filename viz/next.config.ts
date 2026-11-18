import type { NextConfig } from "next";

/**
 * Content-Security-Policy (SEC-04 / SEC-05).
 *
 * The policy is deliberately split per environment:
 *  - production: no 'unsafe-eval' — a production bundle never needs it.
 *  - development: 'unsafe-eval' is required by the Next.js dev overlay and
 *    the webpack dev runtime.
 *
 * `script-src` keeps 'unsafe-inline' in BOTH environments: Next.js App Router
 * emits inline flight-data scripts (`self.__next_f.push(...)`) that carry the
 * RSC payload. A per-request nonce would be the strict alternative, but Next
 * only reads the nonce from a *request* Content-Security-Policy header
 * (middleware), which is out of scope for this config file — without it the
 * app would fail to hydrate.
 */
function contentSecurityPolicy(isDev: boolean): string {
  const scriptSrc = isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";
  return [
    "default-src 'self'",
    scriptSrc,
    // Inline styles are emitted by React (style attributes) and by the deck
    // renderer; styles are not a script-execution vector.
    "style-src 'self' 'unsafe-inline'",
    // blob: — three.js workers; data: — inline images/SVG.
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "media-src 'self' data: blob:",
    "worker-src 'self' blob:",
    "child-src 'self' blob:",
    // 'self' + ws:/wss: for the dev HMR socket and same-origin API calls.
    "connect-src 'self' ws: wss:",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    // SAMEORIGIN, consistent with X-Frame-Options below.
    "frame-ancestors 'self'",
  ].join("; ");
}

const isDev = process.env.NODE_ENV !== "production";

/** Security headers applied to every response (SEC-04). */
const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy(isDev) },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Do not advertise the framework/version (SEC-04 — version fingerprinting).
  poweredByHeader: false,
  // Isolate the dev server's build output from `next build`, so a production
  // build running in the same workspace cannot clobber the running dev
  // server (it would delete .next/server/middleware-manifest.json out from
  // under it). Production builds keep the default .next directory.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Next 15.5 `next dev` uses Turbopack by default. An explicit (even empty)
  // turbopack config is required when a `webpack` config is present, otherwise
  // the dev server aborts with "using Turbopack with a webpack config and no
  // turbopack config". The client-side fs/path fallbacks are translated into
  // turbopack aliases below so client bundles never try to bundle Node builtins.
  turbopack: {
    resolveAlias: {
      fs: { browser: "./lib/empty-module.ts" },
      path: { browser: "./lib/empty-module.ts" },
      child_process: { browser: "./lib/empty-module.ts" },
    },
  },
  // Large data payloads from API routes / snapshots
  experimental: {
    serverActions: { bodySizeLimit: "4mb" },
  },
  // cobe / three / reveal are client-only
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false, child_process: false };
    }
    return config;
  },
  // SEC-04 / SEC-08: security response headers on every route.
  //
  // NOTE (SEC-08): the public tunnel currently runs `next dev`. A dev server
  // exposes unminified chunks, source maps, the HMR websocket and dev-only
  // diagnostics. The production deployment must run `next build && next start`
  // behind a TLS-terminating reverse proxy — this config only adds the
  // response headers; it does not change how the server binds.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
