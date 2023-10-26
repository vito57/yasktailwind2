"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./server";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

//Background color. No theming
interface BodyColorProps {
  children: React.ReactNode;
}
export function BodyColor({ children }: BodyColorProps) {
  const pathname = usePathname();
  //array of pages that must have dark theme
  const dark = ["/works/drugcode"];
  const colorClass = dark.includes(pathname)
    ? "dark bg-black text-ygrey"
    : "light text-yask";
  return <body className={colorClass}>{children}</body>;
}
//AnimatedLayout
interface AnimateLayoutProps {
  children: ReactNode;
}
export function AnimateLayout({ children }: AnimateLayoutProps) {
  return <main className="animate-fadeIn">{children}</main>;
}
//Article top menu
interface ArticleTopMenuProps {
  className?: string;
}
export function ArticleTopMenu({ className }: ArticleTopMenuProps) {
  const pathname = useSelectedLayoutSegment();
  return (
    <div className="container bg-white/90 rounded-full dark:bg-black/80  backdrop-blur-xl z-20 px-4 py-2 flex justify-between sticky top-0 my-4">
      <div className="flex gap-8 items-center">
        <Link href="/">
          <Image src="/yask-logo.svg" width={40} height={40} alt="Yask" />
        </Link>
        <span className="font-bold capitalize">{pathname}</span>
      </div>
      <div className="flex gap-8 items-center">
        <Link href="/" className="hover:text-yred transition">
          Works
        </Link>
        <Link href="/feed" className="hover:text-yred transition">
          Feed
        </Link>
        <Link href="/about" className="hover:text-yred transition">
          About
        </Link>

        <Button path="/">Send email</Button>
      </div>
    </div>
  );
}
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
      className="text-4xl mx-auto mb-6 max-w-xl text-yask animate-fadeIn"
    >
      {title.title}
    </h1>
  );
}
//TABS ON MAIN PAGE
interface TabsProps {
  datas?: any;
  className?: string;
}
export function Tabs({ datas, className }: TabsProps) {
  const pathname = usePathname();
  const cl = `${className}  gap-1 transition-transform transition-gpu rounded-xl p-0.5 inline-flex justify-center`;
  return (
    <menu className={cl}>
      {datas.map((link: { name: string; href: string }) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              className={`px-3 text-sm ${
                isActive ? "bg-yred" : false
              } relative opacity-100  hover:opacity-100 rounded-[10px] transition inline-block py-1.5`}
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
