"use client"
import { usePathname } from "next/navigation";
import data from "../../app/main.json"
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
interface MainNavProp {
  datas?: any;
}
export default function MainNav({datas}:MainNavProp) {
    const pathname = usePathname();
   
    return (
        <Tabs value={pathname}>
            <TabsList className="bg-primary p-0.5">
                {data.map((link: { name: string; href: string }) => {                     
                    return (
                        <TabsTrigger className="dark data-active:bg-yred" key={link.href} nativeButton={false} render={<Link href={link.href} />} value={link.href}>{link.name}</TabsTrigger>
                    );
                })}
            </TabsList>
        </Tabs>
    );
}