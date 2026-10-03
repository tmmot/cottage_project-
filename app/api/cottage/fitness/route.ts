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

    const entries = await prisma.fitnessEntry.findMany({
      include: { comments: true },
      orderBy: { date: "desc" },
    });

    return NextResponse.json(successResponse({ entries }), { status: 200 });
  } catch (error) {
    console.error("Fitness fetch error:", error);
    return NextResponse.json(errorResponse("Failed to fetch fitness"), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const { title, activity, durationMin, date, notes, completed } = await request.json();

    const entry = await prisma.fitnessEntry.create({
      data: {
        userId: session.userId,
        title,
        activity,
        durationMin,
        date: new Date(date),
        notes,
        completed: completed ?? false,
      },
      include: { comments: true },
    });

    return NextResponse.json(successResponse(entry), { status: 201 });
  } catch (error) {
    console.error("Fitness post error:", error);
    return NextResponse.json(errorResponse("Failed to create entry"), { status: 500 });
  }
}
