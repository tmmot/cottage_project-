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

    const entries = await prisma.whiteboardEntry.findMany({
      include: { comments: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(successResponse({ entries }), { status: 200 });
  } catch (error) {
    console.error("Whiteboard fetch error:", error);
    return NextResponse.json(errorResponse("Failed to fetch whiteboard"), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const { content } = await request.json();

    const entry = await prisma.whiteboardEntry.create({
      data: {
        authorId: session.userId,
        content,
      },
      include: { comments: true },
    });

    return NextResponse.json(successResponse(entry), { status: 201 });
  } catch (error) {
    console.error("Whiteboard post error:", error);
    return NextResponse.json(errorResponse("Failed to create entry"), { status: 500 });
  }
}
