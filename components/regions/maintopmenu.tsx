import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import ui8 from "../../public/ui8.svg"
import dribbble from "../../public/dribbble.svg"
export default function MainTopMenu() {
    return (
        <div className="px-4 w-fit flex gap-2">
            <Button variant="secondary" className="bg-ylime" nativeButton={false} render={<Link href="mailto:vitalyyask@gmail.com"/>}>Send email</Button>
            <Link href="https://dribbble.com/yask">
                <Image
                    src={dribbble}
                    width={36}
                    height={36}
                    className="rounded-full transition-transform hover:scale-105"
                    alt="Yask Dribbble"
                />
            </Link>
            <Link href="https://ui8.net/gala-yask">
                <Image
                    src={ui8}
                    width={36}
                    height={36}
                    className="rounded-full transition-transform hover:scale-105"
                    alt="Yask Dribbble"
                />
            </Link>
        </div>
    )
}