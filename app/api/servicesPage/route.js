import { NextResponse } from "next/server";

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
  try {
    //TODO: LINK WITH ACTUAL DB
    return NextResponse.json({
      data: { services, contactInfo },
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
