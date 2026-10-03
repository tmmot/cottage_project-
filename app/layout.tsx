import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momo & Tom's Cottage",
  description: "A cozy interactive digital cottage for shared memories, routines, and life together.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
