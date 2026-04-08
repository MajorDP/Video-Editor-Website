import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { validateToken } from "@/app/_lib/auth";

export async function GET(req) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.json(
      {
        data: null,
        error: "Invalid session.",
      },
      { status: 401 },
    );
  }

  if (!validateToken(token)) {
    return NextResponse.json(
      {
        data: null,
        error: "Invalid session.",
      },
      { status: 401 },
    );
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "app",
      "_lib",
      "websiteData.json",
    );
    const file = await fs.readFile(filePath, "utf-8");
    const fileData = JSON.parse(file);

    if (!fileData || typeof fileData !== "object") {
      return NextResponse.json(
        {
          data: null,
          error: "Data structure is invalid.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      data: {
        stats: fileData.stats,
        allEdits: fileData.allEdits,
        testimonials: fileData.testimonials,
        services: fileData.services,
        experience: fileData.experience,
        stack: fileData.stack,
        contactInfo: fileData.contactInfo,
      },
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
