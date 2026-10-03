import { MusicTrack, IntegrationStatus } from "./types";

export class AppleMusicService {
  static async getAuthUrl(userId: string): Promise<string> {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: process.env.NEXT_PUBLIC_APPLE_MUSIC_KEY_ID || "",
      redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/apple-music/callback`,
      scope: "openid profile email",
      state: userId,
    });
    return `https://appleid.apple.com/auth/authorize?${params.toString()}`;
  }

  static async exchangeCodeForToken(
    code: string
  ): Promise<{ accessToken: string; refreshToken?: string; expiresIn: number } | null> {
    try {
      const response = await fetch("https://appleid.apple.com/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          client_id: process.env.APPLE_MUSIC_KEY_ID || "",
          client_secret: process.env.APPLE_MUSIC_PRIVATE_KEY || "",
          redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/apple-music/callback`,
        }).toString(),
      });

      if (!response.ok) return null;

      const data = await response.json();
      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresIn: data.expires_in,
      };
    } catch (error) {
      console.error("Apple Music token exchange failed:", error);
      return null;
    }
  }

  static async getCurrentlyPlaying(accessToken: string): Promise<MusicTrack | null> {
    try {
      const response = await fetch(
        "https://api.music.apple.com/v1/me/recent/played/tracks?limit=1",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Music-User-Token": accessToken,
          },
        }
      );

      if (!response.ok) return null;

      const data = await response.json();
      const track = data.data?.[0];
      if (!track) return null;

      return {
        id: track.id,
        title: track.attributes.name,
        artist: track.attributes.artistName,
        album: track.attributes.albumName,
        albumArt: track.attributes.artwork?.url,
      };
    } catch (error) {
      console.error("Failed to fetch Apple Music track:", error);
      return null;
    }
  }

  static async getStatus(
    accessToken: string | undefined,
    expiresAt?: Date
  ): Promise<IntegrationStatus> {
    return {
      connected: !!accessToken,
      expiresAt,
      error: !accessToken ? "Not connected" : undefined,
    };
  }
}
