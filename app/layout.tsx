import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fira_Code } from "next/font/google";
import localFont from "next/font/local";
import { BodyColor, Pwa } from "./components/client";
import { Viewport } from "next";

import image from "./twitter-image.png";
export const metadata: Metadata = {
  metadataBase: new URL("https://yask.work"),
  title: {
    default: "Yask Design",
    template: "%s | Yask Design",
  },
  description: "Web and App design, icon sets and code.",

  openGraph: {
    title: "Yask Design",
    description: "Web and App design, icon sets and code.",
    url: "/",
    siteName: "Yask Design",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Yask Design",
    card: "summary_large_image",
  },
};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: [
    "system-ui",
    " -apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

const jbm = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

const firacode = Fira_Code({
  variable: "--font-firacode",
  subsets: ["latin"],
  weight: ["400"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
// Font files can be colocated inside of `app`
const serotiva = localFont({
  variable: "--font-serotiva",
  src: "./fonts/Serotiva.woff2",
  display: "swap",
  fallback: [
    "system-ui",
    " -apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});
// END FONT
export const viewport: Viewport = {
  themeColor: "white",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${inter.variable} ${serotiva.variable} ${firacode.variable} antialiased`}
    >
      <BodyColor>{children}</BodyColor>
      <Pwa />
    </html>
  );
}
