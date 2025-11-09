"use client";
import Link from "next/link";
import { Button } from "./server";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
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
      viewBox="0 0 72 72"
      className={`fill-yask inline-block text-center dark:fill-ytextdark ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.9053 23.4683C12.8791 16.2182 14.5729 20.8013 19.0472 30.5855C20.8555 34.5398 23.094 38.2566 25.7027 41.6749C18.5201 47.7241 15.3063 51.5078 27.5388 51.5078C38.508 51.5078 49.9721 44.5928 39.8186 36.396C44.0231 34.2821 48.3392 32.3565 52.7553 30.632C57.3012 20.8206 58.9881 16.2537 48.9212 23.5375C44.5332 26.7124 40.2122 29.9738 35.9612 33.3207C31.6791 29.9495 27.3262 26.6648 22.9053 23.4683Z" />
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
    "/works/taytega",
  ];
  const colorClass = dark.includes(pathname)
    ? "dark bg-zinc-950 text-ygrey"
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
              className={`px-3 text-sm opacity-90 hover:opacity-100 font-medium ${
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
