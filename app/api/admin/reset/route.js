import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST() {
  try {
    const basePath = path.join(process.cwd(), "app", "_lib");

    const originPath = path.join(basePath, "websiteDataOrigin.json");
    const targetPath = path.join(basePath, "websiteData.json");

    const file = await fs.readFile(originPath, "utf-8");

    let fileDataOrigin;
    try {
      fileDataOrigin = JSON.parse(file);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON format in websiteDataOrigin.json",
        },
        { status: 500 },
      );
    }

    if (!fileDataOrigin || typeof fileDataOrigin !== "object") {
      return NextResponse.json(
        {
          success: false,
          error: "Data structure is invalid.",
        },
        { status: 500 },
      );
    }

    await fs.writeFile(
      targetPath,
      JSON.stringify(fileDataOrigin, null, 2),
      "utf-8",
    );

    return NextResponse.json({
      success: true,
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected server error. Please contact your developer.",
      },
      { status: 500 },
    );
  }
}
