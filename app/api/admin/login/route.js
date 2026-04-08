import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    const { username, password } = body;

    if (!username.trim() || !password.trim()) {
      return NextResponse.json(
        {
          data: null,
          error: "Wrong credentials.",
        },
        { status: 400 },
      );
    }

    const filePath = path.join(process.cwd(), "app", "_lib", "authData.json");
    const file = await fs.readFile(filePath, "utf-8");
    const userData = JSON.parse(file);

    if (username !== userData.username || password !== userData.password) {
      return NextResponse.json(
        {
          data: null,
          error: "Wrong credentials.",
        },
        { status: 400 },
      );
    }

    const response = NextResponse.json({ data: userData.userId, error: null });

    return response;
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
