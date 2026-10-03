import { NextRequest, NextResponse } from "next/server";
import { getSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { SpotifyService } from "@/lib/integrations/spotify";
import { AppleMusicService } from "@/lib/integrations/apple-music";
import { successResponse, errorResponse } from "@/lib/validation";

export async function GET(request: NextRequest) {
  try {
    const session = await getSessionToken();
    if (!session) {
      return NextResponse.json(errorResponse("Not authenticated"), { status: 401 });
    }

    const services = await prisma.connectedService.findMany({
      where: { userId: session.userId, provider: { in: ["spotify", "apple_music"] } },
    });

    const musicData: Record<string, any> = {};

    for (const service of services) {
      if (service.provider === "spotify" && service.accessToken) {
        const track = await SpotifyService.getCurrentlyPlaying(service.accessToken);
        musicData.spotify = {
          track,
          connected: !!service.accessToken,
        };
      }

      if (service.provider === "apple_music" && service.accessToken) {
        const track = await AppleMusicService.getCurrentlyPlaying(service.accessToken);
        musicData.appleMusic = {
          track,
          connected: !!service.accessToken,
        };
      }
    }

    return NextResponse.json(successResponse(musicData), { status: 200 });
  } catch (error) {
    console.error("Music fetch error:", error);
    return NextResponse.json(successResponse({}), { status: 200 });
  }
}
