"use client"
import { usePathname } from "next/navigation";

interface MainTitleProps {
  datas?: any;
}
export default function MainTitle({ datas }: MainTitleProps) {
  const pathname = usePathname();
  const title = datas.find((i: any) => i.href === pathname);

  return (
    <h1
      key={pathname}
      className="scroll-m-20 text-center lg:text-4xl text-3xl font-display text-balance text-primary whitespace-pre-wrap antialiased animate-fadeIn"
    >
      {title.title}
    </h1>
  );
}