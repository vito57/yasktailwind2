"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { ReactNode, useState } from "react";
import { Interface } from "readline";
export function AnimateLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "easeInOut" }}
      className="container px-4"
    >
      {children}
    </motion.div>
  );
}
//TABS ON MAIN PAGE
export function Tabs() {
  // const [active, setActive] = useState();
  const data = [
    { name: "Works", href: "/" },
    { name: "About", href: "/about" },
    { name: "Feed", href: "/feed" },
  ];

  const pathname = usePathname();
  //console.log(props);
  return (
    <menu className="bg-yask gap-1 transition-transform transition-gpu rounded-xl p-0.5 inline-flex justify-center">
      {data.map((link: { name: string; href: string }) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              className="px-3 text-sm relative opacity-90  hover:opacity-100 rounded-[10px] transition inline-block text-white py-1.5 "
              href={link.href}
            >
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute rounded-[10px] inset-0 z-10 bg-white mix-blend-difference"
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
// WORK

export function WorkFooter() {
  return <h1>footer</h1>;
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
    <motion.section
      className="relative overflow-hidden mb-8"
      key="content"
      id={id}
      aria-expanded={exp}
      variants={variants}
      initial={exp ? "open" : "closed"}
      animate={exp ? "open" : "closed"}
    >
      <button
        className="text-xl flex w-full font-bold gap-2 items-center"
        aria-controls={id}
        aria-expanded={exp}
        id={`ac-${id}`}
        onClick={toggleState}
      >
        {title}
        <svg
          width="24"
          height="24"
          aria-expanded={exp}
          className={` block fill-yask aria-expanded:rotate-180 transition-transform `}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.4425 9.16994L5.45157 13.156C4.99357 13.461 4.86557 14.0989 5.17157 14.5569C5.47657 15.0139 6.11657 15.142 6.57557 14.837L12.0045 11.2249L17.4335 14.837C17.8925 15.142 18.5315 15.0139 18.8375 14.5569C19.1435 14.0989 19.0155 13.461 18.5575 13.156L12.5665 9.16994C12.2306 8.94694 11.7785 8.94694 11.4425 9.16994Z" />
        </svg>
      </button>

      <div aria-labelledby={`ac-${id}`}>{children}</div>
      <button
        aria-expanded={exp}
        className="aria-expanded:hidden bg-gradient-to-t absolute w-full h-full from-ybg to-transparent"
        onClick={toggleState}
      ></button>
    </motion.section>
  );
}
