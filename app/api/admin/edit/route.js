import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    //TODO: Create update functionality  => body will have an 'entry' field (which section is edited) and a 'data' field (new data to be saved)
    const body = await req.json();

    //TODO: Add data validation
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again.", data: null },
      { status: 400 },
    );
  }
}
