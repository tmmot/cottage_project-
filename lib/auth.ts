import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "dev-secret-key-change-in-production"
);

export interface AuthPayload {
  userId: string;
  email: string;
  displayName: string;
  iat?: number;
  exp?: number;
}

export async function createSessionToken(payload: Omit<AuthPayload, "iat" | "exp">) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);
  return token;
}

export async function verifySessionToken(token: string): Promise<AuthPayload | null> {
  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload as AuthPayload;
  } catch {
    return null;
  }
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("cottage-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
}

export async function getSessionToken(): Promise<AuthPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("cottage-session")?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("cottage-session");
}
