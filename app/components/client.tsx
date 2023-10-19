"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

//AnimatedLayout
interface AnimateLayoutProps {
  children: ReactNode;
}
export function AnimateLayout({ children }: AnimateLayoutProps) {
  return <main className="animate-fadeIn">{children}</main>;
}

//Jumbotrone
export function Jumbo() {
  const pathname = usePathname();

  return (
    <h1 className="text-4xl mb-6 text-yask">
      Hi! We {pathname == "/" ? "Do" : "❤️"} Web & App Design,
      <br /> Icons Sets and Code
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
                <motion.span
                  layoutId="underline"
                  className="absolute rounded-[10px]  inset-0 z-1 bg-white mix-blend-difference "
                ></motion.span>
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
