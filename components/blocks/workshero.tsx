import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { MoveRight } from "lucide-react";

//PORTFOLIO HERO UNIT
interface WorksHeroProps {
    children: React.ReactNode;
    underTitle?: string;
    title?: string;
    subTitle?: string;
    btnTxt?: string;
    buttonUrl?: any;
    credits?: string;
}
export default function WorksHero({
    children,
    buttonUrl,
    btnTxt = "Purchase Set",
    underTitle,
    title,
    subTitle,
    credits,
}: WorksHeroProps) {
    return (
        <figure className="relative">
            {children}
            <figcaption className="relative pb-8 md:pb-0 md:absolute  md:top-8 md:right-8 md:bottom-8 md:left-8 top-0 left-0  flex flex-col justify-center ">
                <div className="md:max-w-md">
                    <Badge variant={"outline"} className="mb-2">{underTitle}</Badge>
                    <h1 className="h1 font-display mb-2 ">{title}</h1>
                    <p className="text-base mb-4 ">{subTitle}</p>
                    <Link className={buttonVariants({ variant: "default", size: "lg" })} href={buttonUrl}>
                        {btnTxt}<MoveRight />
                    </Link>
                </div>
            </figcaption>
        </figure>
    );
}
//End Aticle Header