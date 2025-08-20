import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
