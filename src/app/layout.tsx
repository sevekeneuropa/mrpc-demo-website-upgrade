import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteContent } from "@/data/site-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL(
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
);

export const metadata: Metadata = {
  title: `${siteContent.brand.name} | Modern Blasting Solutions Demo`,
  description: siteContent.brand.seoDescription,
  metadataBase,
  openGraph: {
    title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
    description: siteContent.brand.seoDescription,
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/images/bulk-services-truck.jpg",
        width: 1920,
        height: 900,
        alt: siteContent.hero.imageAlt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
