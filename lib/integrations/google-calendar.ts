import { CalendarEvent, IntegrationStatus } from "./types";

export class GoogleCalendarService {
  static async getAuthUrl(userId: string): Promise<string> {
    const params = new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID || "",
      redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`,
      response_type: "code",
      scope: "https://www.googleapis.com/auth/calendar.readonly",
      state: userId,
      access_type: "offline",
      prompt: "consent",
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  static async exchangeCodeForToken(
    code: string
  ): Promise<{ accessToken: string; refreshToken?: string; expiresIn: number } | null> {
    try {
      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID || "",
          client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
          code,
          grant_type: "authorization_code",
          redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`,
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
      console.error("Google token exchange failed:", error);
      return null;
    }
  }

  static async getUpcomingEvents(
    accessToken: string,
    maxResults: number = 10
  ): Promise<CalendarEvent[]> {
    try {
      const now = new Date();
      const futureDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?` +
          `timeMin=${now.toISOString()}&` +
          `timeMax=${futureDate.toISOString()}&` +
          `maxResults=${maxResults}&` +
          `singleEvents=true&` +
          `orderBy=startTime`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!response.ok) return [];

      const data = await response.json();
      return (data.items || []).map((event: any) => ({
        id: event.id,
        title: event.summary,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        description: event.description,
        location: event.location,
      }));
    } catch (error) {
      console.error("Failed to fetch calendar events:", error);
      return [];
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
