import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request, { params }) {
  const { projectId } = await params;

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

    const projectData = fileData.allEdits.find(
      (edit) => edit.id.toLowerCase().replace(/\s+/g, "-") === projectId,
    );

    return NextResponse.json({
      data: { projectData, contactInfo: fileData.contactInfo[0] },
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
