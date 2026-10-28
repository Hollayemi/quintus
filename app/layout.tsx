import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";
import { images } from "@/config/images";

// Self-hosted fonts (files in app/fonts), so builds never depend on Google Fonts.
const archivo = localFont({
  src: "./fonts/archivo.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const plexSans = localFont({
  src: [
    { path: "./fonts/plex-sans-400.woff2", weight: "400" },
    { path: "./fonts/plex-sans-500.woff2", weight: "500" },
    { path: "./fonts/plex-sans-600.woff2", weight: "600" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/plex-mono-400.woff2", weight: "400" },
    { path: "./fonts/plex-mono-500.woff2", weight: "500" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Quintus Projects | Construction, civil & structural engineering, Lagos",
    template: "%s | Quintus Projects",
  },
  description:
    "Quintus Projects Ltd delivers building, civil and structural works in Nigeria on time, within budget and to specification: from costing and design coordination to handover.",
  openGraph: {
    title: "Quintus Projects",
    description: site.tagline,
    type: "website",
    images: [images.aboutBanner.src],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
