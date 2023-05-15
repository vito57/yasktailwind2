import Link from "next/link";
import Image from "next/image";

export function ArticleTopMenu() {
  return (
    <div className="container z-20 px-4 flex justify-between sticky top-0 mt-8 mb-8  ">
      <div className="flex gap-8 items-center">
        <Image src="/yask-logo.svg" width={64} height={64} alt="Yask" />
        Yask
      </div>
      <div className="flex gap-8 items-center">
        <Link href="/" className="text-yask hover:text-yred transition">
          Works
        </Link>
        <Link href="/about" className="text-yask hover:text-yred transition">
          About
        </Link>
        <Button>Send email</Button>
      </div>
    </div>
  );
}
export function TopMenu() {
  return (
    <div className="container z-20 px-4 justify-end flex gap-4 sticky top-8">
      <Button>Send email</Button>
      <Link href="https://dribbble.com/yask">
        <Image
          src="dribbble.svg"
          width={40}
          height={40}
          className="rounded-full  transition-transform hover:scale-105"
          alt="Yask Dribbble"
        />
      </Link>
      <Link href="https://ui8.net/gala-yask">
        <Image
          src="ui8.svg"
          width={40}
          height={40}
          className="rounded-full transition-transform hover:scale-105"
          alt="Yask Dribbble"
        />
      </Link>
    </div>
  );
}
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className="outline outline-1 inline-block tracking-tight outline-yask transition rounded-xl px-3 py-2 bg-white text-yask"
    >
      {children}
    </Link>
  );
}
