import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, Button } from "./components/main";
// FONT
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

// END FONT

export const metadata = {
  title: "Yask",
  description: "design site test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="bg-[#FBFBFD]">{children}</body>
    </html>
  );
}
