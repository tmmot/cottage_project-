import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/auth";
import { successResponse } from "@/lib/validation";

export async function POST() {
  try {
    await clearSessionCookie();
    return NextResponse.json(successResponse(null, "Logged out"), { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
