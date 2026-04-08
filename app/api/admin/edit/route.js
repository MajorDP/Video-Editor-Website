import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { validationFns } from "@/app/_lib/validation";

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { data, field } = body;

    console.log(data);
    if (!data || !field) {
      return NextResponse.json(
        {
          success: false,
          error: [{ field: null, error: "Data structure is invalid." }],
        },
        { status: 400 },
      );
    }

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
          success: false,
          error: [{ field: null, error: "Data structure is invalid." }],
        },
        { status: 500 },
      );
    }

    const errorFields = validationFns[field](data);

    if (errorFields.length > 0) {
      return NextResponse.json(
        { success: false, error: errorFields },
        { status: 400 },
      );
    }

    if (field === "allEdits") {
      const existingIds = new Set(
        fileData[field]?.map((item) => item.id) || [],
      );

      data.forEach((entry) => {
        const slugify = (str) =>
          str
            .toLowerCase()
            .trim()
            .replaceAll(/[^a-z0-9\s-]/g, "")
            .replaceAll(/\s+/g, "-")
            .replaceAll(/-+/g, "-");

        const baseSlug = slugify(entry.title);

        if (entry.id) {
          existingIds.delete(entry.id);
        }

        let newId = baseSlug;
        let counter = 1;

        while (existingIds.has(`${newId}`)) {
          newId = `${baseSlug}-${counter}`;
          counter++;
        }

        entry.id = newId;
        existingIds.add(newId);
      });
    }

    fileData[field] = data;
    await fs.writeFile(filePath, JSON.stringify(fileData, null, 2), "utf-8");

    return NextResponse.json({ success: true, error: [] });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: [
          { field: null, error: "Something went wrong. Please try again." },
        ],
      },
      { status: 500 },
    );
  }
}
