"use client";
import { usePathname } from "next/navigation";
import data from "../../app/main.json";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
interface MainNavProp {
  datas?: any;
  variant?: any;
}
export default function MainNav({ datas, variant = "default" }: MainNavProp) {
  const pathname = usePathname();
  return (
    <Tabs value={pathname} className={""}>
      <TabsList
        className={
          "group-data-horizontal/tabs:h-11 shadow-md md:group-data-horizontal/tabs:h-9"
        }
      >
        {data.map((link: { name: string; href: string }) => {
          return (
            <TabsTrigger
              className=" data-active:bg-destructive data-active:text-background hover:data-active:text-background/90"
              key={link.href}
              nativeButton={false}
              render={<Link href={link.href} />}
              value={link.href}
            >
              {link.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
