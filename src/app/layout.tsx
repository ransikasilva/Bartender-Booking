import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuxBar - Premium Bartending Services for Luxury Events",
  description: "Elevate your event with world-class bartending services. Professional flair, premium spirits, and unforgettable experiences for weddings, corporate events, and private parties in NYC.",
  keywords: ["bartender", "cocktail service", "wedding bartender", "corporate events", "private parties", "NYC bartending", "luxury events", "cocktail catering"],
  authors: [{ name: "LuxBar Team" }],
  openGraph: {
    title: "LuxBar - Premium Bartending Services",
    description: "Creating extraordinary cocktail experiences for luxury events since 2014",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
