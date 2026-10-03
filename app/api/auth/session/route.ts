import { NextResponse } from "next/server";
import { getSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/validation";

export async function GET() {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
      include: { connectedServices: true },
    });

    if (!user) {
      return NextResponse.json(errorResponse("User not found"), { status: 404 });
    }

    return NextResponse.json(
      successResponse({
        user: {
          id: user.id,
          email: user.email,
          displayName: user.displayName,
          onboardingCompleted: user.onboardingCompleted,
          connectedServices: user.connectedServices,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Session fetch error:", error);
    return NextResponse.json(errorResponse("Failed to fetch session"), { status: 500 });
  }
}
