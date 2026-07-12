"use client"
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import MainNav from "./mainnav";
import MainLogo from "./mainlogo";
import { Button, buttonVariants } from "../ui/button";
import { Mail } from "lucide-react";
import SandEmailButton from "./sandemailbutton";

//Article top menu
interface ArticleMainMenuProps {
    title?: string;
    className?: string;
}
export default function ArticleMainMenu({ title, className }: ArticleMainMenuProps) {
    const pn = useSelectedLayoutSegment();
    const pathname = title || pn;
    // const [scroll, setScroll] = useState("");

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         window.scrollY
    //             ? setScroll("backdrop-blur-xl bg-white/90 dark:bg-black/90")
    //             : setScroll("");
    //     });
    // }, [scroll]);
    return (
        <div
            className={`fixed top-0 z-10 w-full`}
        >
            <div
                className={`container px-4 py-1 md:py-2 flex justify-between items-center `}
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
                    <MainNav variant={"line"} />
                    <SandEmailButton />
                </div>

            </div>
        </div>
    );
}