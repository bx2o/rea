import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const revalidate = 3600;

export async function GET() {
  try {
    const snap = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "public", "snapshots", "graph.json"), "utf8")
    );
    return NextResponse.json({ source: "snapshot", data: snap });
  } catch {
    return NextResponse.json({ error: "graph unavailable" }, { status: 404 });
  }
}
