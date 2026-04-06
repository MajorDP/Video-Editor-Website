import { NextResponse } from "next/server";

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
      data: { contactInfo },
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: "Something went wrong. Please try again.",
      },
      { status: 400 },
    );
  }
}
