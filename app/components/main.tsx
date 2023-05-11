"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import path from "path";
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className="outline outline-1 inline-block tracking-tight outline-yask  transition rounded-xl px-3 py-2 bg-white text-yask"
    >
      {children}
    </Link>
  );
}
export function Wrap({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: props;
}) {
  console.log(pathname);
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
        //transition={{ duration: 0.2, delay: 0.2 }}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -200 }}
        key={pathname}
        transition={{ type: "linear", duration: 2 }}
        className="container"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
export function Lay({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn: props;
}) {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  console.log("Lay");
  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "easeInOut" }}
      className={cn}
    >
      {children}
    </motion.main>
  );
}
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
      {data.map((link: string) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              className="px-3 text-sm relative opacity-90 tracking-[-0.006em] hover:opacity-100 rounded-[10px] transition inline-block text-white py-1.5 "
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
