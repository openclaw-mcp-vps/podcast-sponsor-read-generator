import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podcast Sponsor Read Generator",
  description: "Generate natural sponsor reads for podcast episodes that match your voice and style."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="56ce994e-50fc-4a6d-8a52-91cf033eb886"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
