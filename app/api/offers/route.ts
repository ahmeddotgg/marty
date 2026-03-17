import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

export async function GET() {
  const dir = path.join(process.cwd(), "public", "offers")
  try {
    const files = await fs.promises.readdir(dir)
    const images = files.filter((f) => /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(f))
    return NextResponse.json(images)
  } catch (err) {
    return NextResponse.json(
      {
        error: "Unable to read offers directory",
        message: err instanceof Error ? err.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
