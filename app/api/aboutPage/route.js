import { NextResponse } from "next/server";

const experience = [
  {
    title: "Lead Editor",
    company: "FREELANCE",
    date: "2022 - PRESENT",
    description: "Description regarding Lead Editor",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    title: "Senior Editor",
    company: "NEXUS STUDIOS",
    date: "2020 - 2022",
    description: "Description regarding Senior Editor",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    title: "Video Editor",
    company: "FREELANCE",
    date: "2019 - 2020",
    description: "Description regarding Video Editor",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
];

const stack = [
  {
    label: "Premiere Pro",
    icon: "Pr",
  },
  {
    label: "After Effects",
    icon: "Ae",
  },
  {
    label: "Photoshop",
    icon: "Ps",
  },
  {
    label: "DaVinci Resolve",
    icon: "Dr",
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

export async function GET(req) {
  //TODO: LINK WITH ACTUAL DB

  try {
    return NextResponse.json({
      data: { experience, stack, contactInfo },
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
