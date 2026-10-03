import { NextRequest, NextResponse } from "next/server";
import { getSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { GoogleCalendarService } from "@/lib/integrations/google-calendar";
import { successResponse, errorResponse } from "@/lib/validation";

export async function GET(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const service = await prisma.connectedService.findUnique({
      where: { userId_provider: { userId: session.userId, provider: "google_calendar" } },
    });

    if (!service?.accessToken) {
      return NextResponse.json(
        successResponse({ events: [], connected: false }),
        { status: 200 }
      );
    }

    const events = await GoogleCalendarService.getUpcomingEvents(service.accessToken, 15);

    return NextResponse.json(successResponse({ events, connected: true }), { status: 200 });
  } catch (error) {
    console.error("Calendar fetch error:", error);
    return NextResponse.json(
      successResponse({ events: [], connected: false, error: "Failed to fetch calendar" }),
      { status: 200 }
    );
  }
}
