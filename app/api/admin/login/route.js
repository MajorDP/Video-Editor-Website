import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    return NextResponse.json({});
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
