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

const services = [
  {
    title: "Long-Form Video Editing",
    description:
      "Professional editing for YouTube, courses, podcasts, and documentaries with strong pacing and storytelling.",
    icon: "❜❜",
    features: [
      "Story-driven cuts and pacing",
      "Color correction & audio balancing",
      "B-roll integration",
      "Motion graphics & titles",
      "Export optimized for platform",
    ],
    process: [
      "Footage review & content structuring",
      "Rough cut focused on narrative flow",
      "B-roll and visual layering",
      "Sound design, music, and cleanup",
      "Final polish and export",
    ],
    deliverables: [
      "1 fully edited long-form video",
      "YouTube-ready export",
      "Optional thumbnails (if needed)",
    ],
    turnaround: "3-5 days",
    revisions: "Up to 2 included",
  },
  {
    title: "Short-Form Content",
    description:
      "High-retention short videos optimized for TikTok, Reels, and YouTube Shorts.",
    icon: "❜❜",
    features: [
      "Fast-paced jump cuts",
      "Engaging subtitles",
      "Hook-focused structure",
      "Zooms, memes, sound effects",
      "Vertical format optimization",
    ],
    process: [
      "Clip selection & hook creation",
      "Fast-cut editing for retention",
      "Captions and visual effects",
      "Sound effects & pacing tweaks",
      "Platform-specific export",
    ],
    deliverables: [
      "3-5 short videos",
      "Vertical (9:16) format",
      "Caption-styled exports",
    ],
    turnaround: "1-3 days",
    revisions: "Up to 2 included",
  },
  {
    title: "Corporate & Commercial",
    description:
      "Clean, high-end editing for brands, ads, and professional communication.",
    icon: "❜❜",
    features: [
      "Brand-aligned visuals",
      "Product/service highlighting",
      "Logo animation & lower thirds",
      "Voiceover syncing",
      "Polished commercial finish",
    ],
    process: [
      "Brand & goal alignment",
      "Structured rough cut",
      "Graphics and branding elements",
      "Audio & voiceover refinement",
      "Final delivery in required formats",
    ],
    deliverables: [
      "Ad or corporate video",
      "Multiple export formats",
      "Brand-consistent visuals",
    ],
    turnaround: "3-7 days",
    revisions: "Up to 3 included",
  },
];

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

export async function GET() {
  //TODO: LINK WITH ACTUAL DB

  try {
    return NextResponse.json({
      data: {
        stats,
        allEdits,
        testimonials,
        services,
        experience,
        stack,
        contactInfo,
      },
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        stats: null,
        allEdits: null,
        testimonials: null,
        services: null,
        experience: null,
        stack: null,
        contactInfo: null,
        error: "Something went wrong. Please try again.",
      },
      { status: 400 },
    );
  }
}
