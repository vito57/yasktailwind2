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
}
export function Logo({ width = 64, height = 64 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      className="fill-yask dark:fill-ytextdark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M51.8066 16.2279C51.7526 20.089 51.0149 23.7849 49.7089 27.1997C44.7645 28.8402 39.8981 30.6519 35.1168 32.6276C34.0856 31.7852 33.0467 30.9519 32 30.1279C38.3304 25.1444 44.9418 20.5018 51.8066 16.2279Z" />
      <path d="M19.8095 47.7721C24.1273 47.7721 28.2453 46.9169 32.0035 45.3668C35.8236 43.8814 39.0689 41.2451 41.3134 37.8837C38.9104 35.7682 36.4607 33.7043 33.9661 31.694L33.9554 31.6854L33.9445 31.6766C33.2993 31.1568 32.6512 30.6405 32 30.1279C25.6696 25.1444 19.0581 20.5019 12.1934 16.228C12.3161 25.0124 15.9783 32.941 21.8183 38.6521C18.7731 41.3615 15.8039 44.1544 12.9142 47.0273C15.135 47.515 17.4422 47.7721 19.8095 47.7721Z" />
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
  const dark = ["/works/drugcode", "/works/bootsyduotone", "/works/poehali"];
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
        className={`container px-4 py-1 md:py-2 flex justify-between  md:mb-4 `}
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
          <Tabs className="bg-yask  dark:md:text-ytextdark md:text-yask text-white md:bg-transparent" />
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
      <Tabs className="bg-yred  dark:md:text-ytextdark md:text-yask text-white md:bg-transparent" />
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
      className="lg:text-4xl text-3xl mx-auto max-w-xl antialiased text-yask animate-fadeIn"
    >
      {title.title}
    </h1>
  );
}
//TABS ON MAIN PAGE
interface TabsProps {
  className?: string;
}
export function Tabs({ className }: TabsProps) {
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
              className={`px-3 text-sm text-white/90 hover:text-white font-medium ${
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
