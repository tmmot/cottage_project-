export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt?: string;
  url?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

export interface IntegrationStatus {
  connected: boolean;
  lastSync?: Date;
  expiresAt?: Date;
  error?: string;
}
