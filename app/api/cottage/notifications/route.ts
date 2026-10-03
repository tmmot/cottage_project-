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

    const notifications = await prisma.notification.findMany({
      where: { recipientId: session.userId },
      include: { sender: true },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json(successResponse({ notifications }), { status: 200 });
  } catch (error) {
    console.error("Notifications fetch error:", error);
    return NextResponse.json(errorResponse("Failed to fetch notifications"), { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const { notificationId, readAt } = await request.json();

    const notification = await prisma.notification.update({
      where: { id: notificationId },
      data: { readAt: readAt ? new Date() : null },
    });

    return NextResponse.json(successResponse(notification), { status: 200 });
  } catch (error) {
    console.error("Notification update error:", error);
    return NextResponse.json(errorResponse("Failed to update notification"), { status: 500 });
  }
}
