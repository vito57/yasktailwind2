"use client"
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import MainNav from "./mainnav";
import { MainLogo } from "./mainlogo";
import { Button, buttonVariants } from "../ui/button";

//Article top menu
interface ArticleMainMenuProps {
    title?: string;
    className?: string;
}
export function ArticleMainMenu({ title, className }: ArticleMainMenuProps) {
    const pn = useSelectedLayoutSegment();
    const pathname = title || pn;
    const [scroll, setScroll] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY
                ? setScroll("backdrop-blur-xl bg-white/90 dark:bg-black/90")
                : setScroll("");
        });
    }, [scroll]);
    return (
        <div
            className={`z-10 ${title ? "static" : "sticky"
                } md:sticky top-0 ${scroll}`}
        >
            <div
                className={`container px-4 py-1 md:py-2 flex justify-between items-center md:mb-4 `}
            >
                <div className="flex gap-4 grow md:gap-8 items-center">
                    <Link href="/">
                        <MainLogo width={40} height={40} />
                    </Link>
                    <span className={`font-bold capitalize`}>{pathname}</span>
                </div>

                <div
                    className={`hidden md:flex fixed md:static py-2 mr-2 justify-center left-0 right-0 bottom-0 gap-2 items-center`}
                >
                    <MainNav />
                </div>
                <div className="py-2">
                   
                    <Link className={buttonVariants({ variant: "secondary", className:"bg-ylime" })} href="mailto:vitalyyask@yandex.ru">Send email</Link>
                    
                </div>
            </div>
        </div>
    );
}