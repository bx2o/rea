/**
 * Empty browser shim for Node builtins (fs / path / child_process).
 * Referenced by next.config.ts turbopack.resolveAlias so client bundles never
 * attempt to bundle server-only modules. This module intentionally exports
 * nothing — any client code importing these builtins is a bug.
 */
export {};
