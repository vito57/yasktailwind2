"use client";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./server";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { ReactNode, useState, useEffect, useLayoutEffect } from "react";
import data from "../main.json";
//PWA

export function Pwa() {
  console.log("start");
  let sw: ServiceWorkerContainer | undefined;

  if (typeof window !== "undefined") {
    sw = window?.navigator?.serviceWorker;
  }

  useEffect(() => {
    if (sw) {
      sw.register("/sw.js", { scope: "/" })
        .then((registration) => {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope
          );
        })
        .catch((err) => {
          console.log("Service Worker registration failed: ", err);
        });
    }
  }, [sw]);

  return <></>;
}

//Logo
interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}
export function Logo({ width = 64, height = 64, className }: LogoProps) {
  return (

    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      className={`fill-yask inline-block text-center dark:fill-ytextdark ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M29.827 47.1719C33.9827 46.1611 37.8403 43.7955 40.6778 40.1636C40.7768 40.0369 40.8741 39.9093 40.9695 39.7809C39.0122 38.1338 37.0369 36.5074 35.0438 34.9022C38.6136 33.2201 42.4069 31.9345 46.3672 31.1023C48.3237 27.1202 49.7299 22.9538 50.5951 18.71C44.2248 23.0849 38.0046 27.6626 31.9439 32.4338C25.8832 27.6626 19.663 23.0849 13.2927 18.71C15.5836 29.9556 21.5257 39.8735 29.827 47.1719Z" />
      <path d="M16.1952 45.578C18.1961 43.8071 20.2173 42.0584 22.2582 40.3324C23.0667 40.9202 23.893 41.4851 24.7361 42.0262C26.3113 43.8578 28.0129 45.577 29.827 47.1719C25.3272 48.2664 20.4776 47.7731 16.1952 45.578Z" />
    </svg>
  );
}
//Background color. No theming
interface BodyColorProps {
  children: React.ReactNode;
}
export function BodyColor({ children }: BodyColorProps) {
  const pathname = usePathname();
  //array of pages that must have dark theme
  const dark = [
    "/works/drugcode",
    "/works/bootsyduotone",
    "/works/poehali",
    "/works/bowlerslink",
    "/works/pobeda",
    "/works/riveo",
    "/works/restevents",
    "/works/taytega"
  ];
  const colorClass = dark.includes(pathname)
    ? "dark bg-zinc-950 text-ytextdark"
    : "light text-yask";
  return <body className={colorClass}>{children}</body>;
}

export function MobileNavBar() {
  return (
    <div className="flex md:hidden gap-4 py-2 bg-white  justify-center z-20 container fixed bottom-0 dark:bg-black">
      <Link href="/" className="ylink p-2">
        Works
      </Link>
      <Link href="/feed" className="ylink p-2">
        Feed
      </Link>
      <Link href="/about" className="ylink p-2">
        About
      </Link>
    </div>
  );
}
//Article top menu
interface ArticleTopMenuProps {
  title?: string;
  className?: string;
}
export function ArticleTopMenu({ title, className }: ArticleTopMenuProps) {
  const pn = useSelectedLayoutSegment();
  const pathname = title || pn;
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY
        ? setScroll("backdrop-blur-xl bg-white/90 dark:bg-black/90")
        : setScroll("");
    });
  }, [scroll]);
  return (
    <div
      className={`z-10 ${
        title ? "static" : "sticky"
      } md:sticky top-0 ${scroll}`}
    >
      <div
        className={`container px-4 py-1 md:py-2 flex justify-between items-center md:mb-4 `}
      >
        <div className="flex gap-4 grow md:gap-8 items-center">
          <Link href="/">
            <Logo width={40} height={40} />
          </Link>
          <span className={`font-bold capitalize`}>{pathname}</span>
        </div>

        <div
          className={`hidden md:flex fixed md:static py-2 justify-center left-0 right-0 bottom-0 gap-2 items-center`}
        >
          <Navigation className="bg-yask  dark:md:text-ytextdark md:text-yask text-white md:bg-transparent" />
          {/* <Button path="mailto:vito57rus@yandex.ru" className="hidden md:block">Send email</Button> */}
        </div>
        <div className="py-2">
          <Button path="mailto:vito57rus@yandex.ru">Send email</Button>
        </div>
      </div>
    </div>
  );
}
//MOBILE ARTICLE FOOTER
export function MobileArticleFooter() {
  return (
    <div
      className={`flex md:hidden fixed md:static py-4 justify-center left-0 right-0 bottom-0 gap-2 z-10 items-center`}
    >
      <Navigation className="bg-yred  dark:md:text-ytextdark md:text-yask text-white md:bg-transparent" />
      {/* <Button path="mailto:vito57rus@yandex.ru" className="hidden md:block">Send email</Button> */}
    </div>
  );
}
//END MOBILE ARTICLE FOOTER
//Jumbotrone
interface JumboProps {
  datas?: any;
}
export function Jumbo({ datas }: JumboProps) {
  const pathname = usePathname();
  const title = datas.find((i: any) => i.href === pathname);

  return (
    <h1
      key={pathname}
      className="lg:text-5xl font-display whitespace-pre-wrap text-3xl mx-auto max-w-xl antialiased animate-fadeIn"
    >
      {title.title}
    </h1>
  );
}
//TABS ON MAIN PAGE
interface TabsProps {
  className?: string;
}
export function Navigation({ className }: TabsProps) {
  const pathname = usePathname();
  return (
    <menu
      className={`${className}  gap-1 transition-transform transition-gpu rounded-xl p-0.5 my-0.5 inline-flex justify-center`}
    >
      {data.map((link: { name: string; href: string }) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              className={`px-3 text-sm font-medium ${
                isActive ? "bg-yred opacity-100" : false
              } relative rounded-[10px] transition inline-block py-1.5`}
              href={link.href}
            >
              {/* {isActive && (
                <span
                  //layoutId="underline"
                  className="absolute rounded-[10px]  inset-0 z-1 bg-white mix-blend-difference "
                ></span>
              )} */}
              {link.name}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

//END WORK
