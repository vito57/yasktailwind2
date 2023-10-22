import "../styles/globals.css";
import type { Metadata } from 'next';
import { Inter } from "@next/font/google";
import { BodyColor } from "./components/client";
export const metadata: Metadata = {
  // metadataBase: new URL('https://yask-design.github.io'),
  title: {
    default: 'Yask Design',
    template: '%s | Yask Design',
  },
  description: 'Web and App design, icon sets and code.',
  openGraph: {
    title: 'Yask Design',
    description: 'Web and App design, icon sets and code.',
    url: '',
    siteName: 'Yask Design',
    locale: 'en_US',
    type: 'website',
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  twitter: {
    title: 'Yask Design',
    card: 'summary_large_image',
  },
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// END FONT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning={true} className={`${inter.variable}`}>
     
   <BodyColor>
  
            {children}
            </BodyColor> 
     
     
    </html>
  );
}
