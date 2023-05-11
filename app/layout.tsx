// "use client";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { Tabs, Button, Wrap, Lay } from "./components/main";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export const metadata = {
//   title: "Yask",
//   description: "design site test",
// };
// FONT
import { Inter, Roboto_Mono } from "@next/font/google";

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

const variants = {
  hidden: { opacity: 0, y: -200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
};
const tabData = [
  { name: "Works", href: "/" },
  { name: "About", href: "/about" },
  { name: "Feed", href: "/feed" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="bg-[#FBFBFD]">
        <div className="container z-20  justify-end flex gap-4 sticky top-8">
          <Button>Send email</Button>
          <Link href="/">
            <Image
              src="dribbble.svg"
              width={40}
              height={40}
              className="rounded-full transition-transform hover:scale-105"
              alt="Yask Dribbble"
            />
          </Link>
          <Link href="/">
            <Image
              src="ui8.svg"
              width={40}
              height={40}
              className="rounded-full transition-transform hover:scale-105"
              alt="Yask Dribbble"
            />
          </Link>
        </div>
        <header id="header" className="container">
          <hgroup className="text-center ">
            <Image
              className="inline-block mb-6 "
              src="yask-logo.svg"
              width={64}
              height={64}
              alt="Yask Design"
            />
            <h1 className="md:text-[40px]/[56px] text-2xl tracking-[-0.021em] mb-6 text-yask">
              Hi! We Do Web & App Design,
              <br /> Icon Sets and Frontend
            </h1>
          </hgroup>
        </header>
        <nav className="container z-10 text-center mb-10 sticky  top-[34px]">
          <Tabs />
        </nav>

        {children}
      </body>
    </html>
  );
}
