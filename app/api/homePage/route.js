import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
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
          stats: null,
          allEdits: null,
          testimonials: null,
          services: null,
          experience: null,
          stack: null,
          contactInfo: null,
          error: "Data structure is invalid.",
        },
        { status: 500 },
      );
    }

    const featuredEdits = fileData.allEdits.filter((edit) => edit.featured);

    return NextResponse.json({
      data: {
        stats: fileData.stats,
        featuredEdits: featuredEdits,
        testimonials: fileData.testimonials,
        contactInfo: fileData.contactInfo[0],
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
