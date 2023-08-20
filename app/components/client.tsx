"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { ReactNode, useState } from "react";
import { Interface } from "readline";

//AnimatedLayout
interface AnimateLayoutProps {
  className?: string;
  children: ReactNode;
}
export function AnimateLayout({ children, className }: AnimateLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.main>
  );
}
//bgcolor
export function BgColor() {
  const [color, setColor] = useState("bg-black");
  console.log(color);
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
  const cl = `${className} gap-1 transition-transform transition-gpu rounded-xl p-0.5 inline-flex justify-center`;
  return (
    <menu className={cl}>
      {datas.map((link: { name: string; href: string }) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              className="px-3 text-sm relative opacity-100  hover:opacity-100 rounded-[10px] transition inline-block py-1.5"
              href={link.href}
            >
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute rounded-[10px] inset-0 z-1 bg-yred "
                ></motion.span>
              )}
              {link.name}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

//END WORK

//ACCORDEON
interface AccordeonProps {
  expanded: boolean;
  title: string;
  children: ReactNode;
  id: string;
}
export function Accordeon({ expanded, children, title, id }: AccordeonProps) {
  const [exp, setExp] = useState(expanded);
  function toggleState() {
    setExp(exp ? false : true);
  }
  const variants = {
    open: { height: "auto" },
    closed: { height: "64px" },
  };
  return (
    <motion.div
      className="relative overflow-hidden flex  gap-8 mb-8"
      key="content"
      id={id}
      aria-expanded={exp}
      variants={variants}
      initial={exp ? "open" : "closed"}
      animate={exp ? "open" : "closed"}
    >
      <button
        className="text-xl w-3/12 text-left self-baseline  inline-block font-bold"
        aria-controls={id}
        aria-expanded={exp}
        id={`ac-${id}`}
        onClick={toggleState}
      >
        {title}
      </button>

      <div className="w-9/12" aria-labelledby={`ac-${id}`}>
        {children}
      </div>
      <button
        aria-expanded={exp}
        className="aria-expanded:hidden bg-gradient-to-t absolute w-full h-full from-ybg to-transparent"
        onClick={toggleState}
      ></button>
    </motion.div>
  );
}
