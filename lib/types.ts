export interface Position {
  x: number; // percentage position
  y: number;
}

export interface CottageObject {
  id: string;
  name: string;
  position: Position;
  description: string;
  icon: string;
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
  lastSeenAt: Date;
  onboardingCompleted: boolean;
  onboardingVersion: string;
}

export interface ConnectedService {
  id: string;
  userId: string;
  serviceType: "google-calendar" | "spotify" | "apple-music";
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  isConnected: boolean;
}

export interface Photo {
  id: string;
  userId: string;
  url: string;
  thumbnail?: string;
  category: "today" | "time-ago" | "what-i-ate" | "what-im-doing";
  caption?: string;
  uploadedAt: Date;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  provider: "google" | "other";
}