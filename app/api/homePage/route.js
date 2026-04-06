import { NextResponse } from "next/server";

const stats = [
  {
    label: "Global Projects",
    stat: "250+",
  },
  {
    label: "Industry Awards",
    stat: "2",
  },
  {
    label: "Views Generated",
    stat: "500k",
  },
  {
    label: "Years of Experience",
    stat: "5+",
  },
];

const allEdits = [
  {
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

const testimonials = [
  {
    name: "John Johnas",
    title: "CEO, MCDonalds",
    description:
      "Name Named provided great services Name Named provided great services Name Named provided great services Name Named provided great services",

    img: "/heroImg.png",
  },
  {
    name: "John Johnas2",
    title: "CEO, MCDonalds",
    description:
      "Name Named provided great services Name Named provided great services Name Named provided great services Name Named provided great services",
    img: "/heroImg.png",
  },
  {
    name: "John Johnas3",
    title: "CEO, MCDonalds",
    description:
      "Name Named provided great services Name Named provided great services Name Named provided great services Name Named provided great services",
    img: "/heroImg.png",
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

export async function GET() {
  //TODO: LINK WITH ACTUAL DB
  try {
    const featuredEdits = allEdits.filter((edit) => edit.featured);

    return NextResponse.json({
      stats,
      featuredEdits,
      testimonials,
      contactInfo,
    });
  } catch (error) {
    return NextResponse.json(
      {
        stats: null,
        featuredEdits: null,
        testimonials: null,
        contactInfo: null,
        error: "Something went wrong. Please try again.",
      },
      { status: 400 },
    );
  }
}
