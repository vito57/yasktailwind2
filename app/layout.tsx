import "../styles/globals.css";
import type { Metadata } from "next";

import {inter, serotiva} from "@/components/typography/fonts"
import { BodyColor, Pwa } from "./components/client";
import { Viewport } from "next";
import image from "./twitter-image.png";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
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


// const jbm = JetBrains_Mono({
//   variable: "--font-jbm",
//   subsets: ["latin"],
//   weight: ["400"],
//   fallback: [
//     "ui-monospace",
//     "SFMono-Regular",
//     "Menlo",
//     "Monaco",
//     "Consolas",
//     "Liberation Mono",
//     "Courier New",
//     "monospace",
//   ],
// });

// Font files can be colocated inside of `app`

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
      className={`${inter.variable} ${serotiva.variable} antialiased`}
    >
      <BodyColor>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </BodyColor>

      <Pwa />

    </html>
  );
}
