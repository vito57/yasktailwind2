"use client"
import { usePathname } from "next/navigation";

interface MainTitleProps {
  datas?: any;
}
export function MainTitle({ datas }: MainTitleProps) {
  const pathname = usePathname();
  const title = datas.find((i: any) => i.href === pathname);

  return (
    <h1
      key={pathname}
      className="scroll-m-20 text-center lg:text-5xl text-3xl font-display tracking-tight text-balance whitespace-pre-wrap antialiased animate-fadeIn"
    //   className="lg:text-5xl font-display whitespace-pre-wrap text-3xl mx-auto max-w-xl antialiased animate-fadeIn"
    >
      {title.title}
    </h1>
  );
}