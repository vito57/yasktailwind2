import "../styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, serotiva, jbm } from "@/components/typography/fonts"
import { Pwa } from "@/components/pwa";
import { Viewport } from "next";
import MainFooter from "@/components/global/mainfooter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${serotiva.variable} ${jbm.variable} antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider> {children} </TooltipProvider>
          <Toaster />
        </ThemeProvider>
        <MainFooter />

      </body>
      {/* <body> {children}
         
       </body> */}


      {/* <Toaster /> */}
      {/* <Pwa /> */}

    </html>
  );
}
