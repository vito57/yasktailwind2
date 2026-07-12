import {Mail } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
export default function SandEmailButton() {

    return <Link className={buttonVariants({ variant: "default" })} href="mailto:vitalyyask@yandex.ru"><Mail />Send email</Link>

}
