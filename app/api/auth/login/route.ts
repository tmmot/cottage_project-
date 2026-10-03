import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createSessionToken, setSessionCookie } from "@/lib/auth";
import { validateEmail, validateDisplayName, errorResponse, successResponse } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, displayName } = body;

    if (!validateEmail(email)) {
      return NextResponse.json(errorResponse("Invalid email format"), { status: 400 });
    }

    if (!validateDisplayName(displayName)) {
      return NextResponse.json(
        errorResponse("Display name must be 2-100 characters"),
        { status: 400 }
      );
    }

    // Find or create user
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          displayName,
        },
      });
    }

    // Create session token
    const token = await createSessionToken({
      userId: user.id,
      email: user.email,
      displayName: user.displayName,
    });

    // Set secure cookie
    await setSessionCookie(token);

    return NextResponse.json(
      successResponse(
        {
          userId: user.id,
          email: user.email,
          displayName: user.displayName,
          onboardingCompleted: user.onboardingCompleted,
        },
        "Login successful"
      ),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(errorResponse("Login failed"), { status: 500 });
  }
}
