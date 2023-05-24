import Link from "next/link";
import Image from "next/image";

export function ArticleTopMenu() {
  return (
    <div className="container z-20 px-4 flex justify-between sticky top-8 mt-8 mb-8  ">
      <div className="flex gap-8 items-center">
        <Image src="/yask-logo.svg" width={64} height={64} alt="Yask" />
        <span className="font-bold"> Drugcode - code and visual editor</span>
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
interface SectionProps {
  className: string;
  children: React.ReactNode;
}
export function Section({ children, className }: SectionProps) {
  return <section className={className}>{children}</section>;
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
      className="outline outline-1 inline-block  outline-yask transition rounded-xl px-3 py-2 bg-white text-yask"
    >
      {children}
    </Link>
  );
}
interface ArticleImageSectionProps {
  data1: { src: string; caption: string };
  data2: { src: string; caption: string };
}

export function ArticleImageSection(props: ArticleImageSectionProps) {
  return (
    <div className="flex  gap-4 mb-8">
      <div className="basis-1/2">
        <figure>
          <Image
            src={props.data1.src}
            width={1600}
            height={1200}
            className="w-full"
            alt="sdd"
          />
          <figcaption className="text-sm">{props.data1.caption}</figcaption>
        </figure>
      </div>
      <div className="basis-1/2">
        <figure>
          <Image
            src={props.data2.src}
            width={1600}
            height={1200}
            className="w-full"
            alt="sdd"
          />
          <figcaption className="text-sm">{props.data2.caption}</figcaption>
        </figure>
      </div>
    </div>
  );
}
