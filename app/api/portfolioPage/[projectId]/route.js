import { NextResponse } from "next/server";

const allEdits = [
  {
    id: "edit-1",
    title: "Edit 1",
    type: "Youtube Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "yt", label: "Youtube" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 1",
  },
  {
    id: "edit-2",
    title: "Edit 2",
    type: "TikTok Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "tt", label: "TikTok" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 2",
  },
  {
    id: "edit-3",
    title: "Edit 3",
    type: "Youtube Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "yt", label: "Youtube" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 3",
  },
  {
    id: "edit-4",
    title: "Edit 4",
    type: "TikTok Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "tt", label: "TikTok" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 4",
  },
];

const contactInfo = {
  email: "email@gmail.com",
  location: "NEON CITY, USA",
  phone: "+123 345 3535",
  socialMedia: [
    {
      href: "https://github.com/yourprofile",
      label: "Github",
    },
    {
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
  ],
};

export async function GET(request, { params }) {
  const { projectId } = await params;
  //TODO: LINK WITH ACTUAL DB

  const projectData = allEdits.find(
    (edit) => edit.id.toLowerCase().replace(/\s+/g, "-") === projectId,
  );

  try {
    return NextResponse.json({
      data: { projectData, contactInfo },
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
