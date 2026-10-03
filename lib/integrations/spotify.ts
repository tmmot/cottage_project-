import { MusicTrack, IntegrationStatus } from "./types";

export class SpotifyService {
  static async getAuthUrl(userId: string): Promise<string> {
    const params = new URLSearchParams({
      client_id: process.env.SPOTIFY_CLIENT_ID || "",
      response_type: "code",
      redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/spotify/callback`,
      scope: "user-read-currently-playing user-read-playback-state",
      state: userId,
    });
    return `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  static async exchangeCodeForToken(
    code: string
  ): Promise<{ accessToken: string; refreshToken?: string; expiresIn: number } | null> {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
        },
        body: new URLSearchParams({
          code,
          grant_type: "authorization_code",
          redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/spotify/callback`,
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
      console.error("Spotify token exchange failed:", error);
      return null;
    }
  }

  static async getCurrentlyPlaying(accessToken: string): Promise<MusicTrack | null> {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!response.ok || response.status === 204) return null;

      const data = await response.json();
      if (!data.item) return null;

      return {
        id: data.item.id,
        title: data.item.name,
        artist: data.item.artists.map((a: any) => a.name).join(", "),
        album: data.item.album.name,
        albumArt: data.item.album.images[0]?.url,
        url: data.item.external_urls.spotify,
      };
    } catch (error) {
      console.error("Failed to fetch current track:", error);
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
