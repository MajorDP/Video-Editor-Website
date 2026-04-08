import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { validateToken } from "@/app/_lib/auth";

export async function POST(req) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        error: [{ field: null, error: "Invalid session." }],
      },
      { status: 401 },
    );
  }

  if (!validateToken(token)) {
    return NextResponse.json(
      {
        data: null,
        error: [{ field: null, error: "Invalid session." }],
      },
      { status: 401 },
    );
  }

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
          error: [
            {
              field: null,
              error: [
                {
                  field: null,
                  error: "Invalid JSON format in websiteDataOrigin.json.",
                },
              ],
            },
          ],
        },
        { status: 500 },
      );
    }

    if (!fileDataOrigin || typeof fileDataOrigin !== "object") {
      return NextResponse.json(
        {
          success: false,
          error: [{ field: null, error: "Data structure is invalid." }],
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
        error: [
          {
            field: null,
            error: "Unexpected server error. Please contact your developer.",
          },
        ],
      },
      { status: 500 },
    );
  }
}
