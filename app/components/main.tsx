"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
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
export function Lay(
  { children }: { children: React.ReactNode },
  props: any,
  className: string
) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  console.log(props);
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
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
  return (
    <menu className="bg-yask gap-1 transition-transform transition-gpu rounded-xl p-0.5 inline-flex justify-center">
      {data.map((link) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              className="px-3 text-sm relative opacity-90 tracking-[-0.006em] hover:opacity-100 rounded-[10px] transition inline-block text-white py-1.5 "
              key={link.href}
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
