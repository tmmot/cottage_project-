import { NextRequest, NextResponse } from "next/server";
import { getSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/validation";

export async function GET(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const photos = await prisma.photo.findMany({
      where: { userId: session.userId },
      orderBy: { takenAt: "desc" },
      take: 50,
    });

    return NextResponse.json(successResponse({ photos }), { status: 200 });
  } catch (error) {
    console.error("Photos fetch error:", error);
    return NextResponse.json(errorResponse("Failed to fetch photos"), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const body = await request.json();
    const { url, caption, category, takenAt } = body;

    const photo = await prisma.photo.create({
      data: {
        userId: session.userId,
        url,
        caption,
        category,
        takenAt: takenAt ? new Date(takenAt) : new Date(),
      },
    });

    return NextResponse.json(successResponse(photo), { status: 201 });
  } catch (error) {
    console.error("Photo upload error:", error);
    return NextResponse.json(errorResponse("Failed to upload photo"), { status: 500 });
  }
}
