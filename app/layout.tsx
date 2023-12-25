import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BodyColor } from "./components/client";

import image from "./twitter-image.png";
export const metadata: Metadata = {
  metadataBase: new URL('http://yask.work'),
  title: {
    default: "Yask Design",
    template: "%s | Yask Design",
  },
  description: "Web and App design, icon sets and code.",
  
  openGraph: {
    title: "Yask Design",
    description: "Web and App design, icon sets and code.",
    url: "http://yask.work",
    siteName: "Yask Design",
    locale: "en_US",
    type: "website"
   
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Yask Design",
    card: "summary_large_image"
   
  }

};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  fallback: ["system-ui"," -apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Liberation Sans", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
});
// END FONT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${inter.variable} antialiased`}
    >
      <BodyColor>{children}</BodyColor>
    </html>
  );
}
