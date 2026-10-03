import { NextRequest, NextResponse } from "next/server";
import { getSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/validation";

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const { completed, version } = await request.json();

    const user = await prisma.user.update({
      where: { id: session.userId },
      data: {
        onboardingCompleted: completed ?? true,
        onboardingVersion: version ?? undefined,
      },
    });

    return NextResponse.json(
      successResponse({ onboardingCompleted: user.onboardingCompleted }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Onboarding update error:", error);
    return NextResponse.json(errorResponse("Failed to update onboarding"), { status: 500 });
  }
}
