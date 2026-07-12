
import { buttonVariants } from "../ui/button";
import Link from "next/link";
export default function SandEmailButton() {

    return <Link className={buttonVariants({ variant: "secondary" })} href="mailto:vitalyyask@gmail.com">Send email</Link>

}
