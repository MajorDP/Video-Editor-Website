import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app"
    : "http://localhost:3000";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "_lib", "websiteData.json");
  const file = await fs.readFile(filePath, "utf-8");
  const fileData = JSON.parse(file);

  const pages = ["", "portfolio", "services", "about", "contact"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const url = page ? `${BASE_URL}/${page}` : `${BASE_URL}/`;
    return `<url><loc>${url}</loc></url>`;
  })
  .join("\n")}
${fileData.allEdits
  .map((project) => `<url><loc>${BASE_URL}/portfolio/${project.id}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
