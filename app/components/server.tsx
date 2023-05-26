import Link from "next/link";
import Image from "next/image";

export function ArticleTopMenu() {
  return (
    <div className="container z-20 px-4 flex justify-between sticky top-8 mt-8 mb-8  ">
      <div className="flex gap-8 items-center">
        <Image
          src="/yask-logo.svg"
          width={64}
          height={64}
          className="dark:fill-slate-50"
          alt="Yask"
        />
        <span className="font-bold dark:text-white">
          {" "}
          Drugcode - code and visual editor
        </span>
      </div>
      <div className="flex gap-8 items-center">
        <Link
          href="/"
          className="text-yask dark:text-white hover:text-yred transition"
        >
          Works
        </Link>
        <Link
          href="/about"
          className="text-yask dark:text-white hover:text-yred transition"
        >
          About
        </Link>
        <Button>Send email</Button>
      </div>
    </div>
  );
}
interface SectionProps {
  className: string;
  id?: string;
  children: React.ReactNode;
}
export function Section({ children, className, id }: SectionProps) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
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
      className="outline outline-1 inline-block  outline-yask transition rounded-xl px-3 py-2 bg-white text-yask"
    >
      {children}
    </Link>
  );
}
interface ArticleImageSectionProps {
  data1: { src: string; caption?: string };
  data2: { src: string; caption?: string };
}

export function ArticleImageSection(props: ArticleImageSectionProps) {
  return (
    <div className="flex  gap-2 mb-8">
      <div className="basis-1/2">
        <figure>
          <Image
            src={props.data1.src}
            width={1600}
            height={1200}
            className="w-full rounded"
            alt={props.data1.caption || props.data1.src}
          />
          {props.data1.caption && (
            <figcaption className="text-sm">{props.data1.caption}</figcaption>
          )}
        </figure>
      </div>
      <div className="basis-1/2">
        <figure>
          <Image
            src={props.data2.src}
            width={1600}
            height={1200}
            className="w-full rounded"
            alt={props.data2.caption || props.data2.src}
          />
          {props.data2.caption && (
            <figcaption className="text-sm">{props.data2.caption}</figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
interface ArticleDescriptionProps {
  //className: string;
  children: React.ReactNode;
}
export function ArticleDescription({ children }: ArticleDescriptionProps) {
  return <div className="mx-auto max-w-screen-md">{children}</div>;
}
// WORK

export function Footer() {
  return (
    <p className="text-sm container text-center mt-8 mb-8">
      Copyright © 2023 Yaskevich. All rights reserved.
    </p>
  );
}
//get headings
//push headings to links
//add ancors
//on click scroll to ancor
//
export function ArticleSubMenu() {
  return (
    <menu className="fixed top-0 ml-20">
      <li>
        <Link href="ds">About</Link>
      </li>
      <li>
        <Link href="ds">Branding</Link>
      </li>
      <li>
        <Link href="ds">About</Link>
      </li>
      <li>
        <Link href="ds">About</Link>
      </li>
    </menu>
  );
}
interface ArticleProps {
  className: string;
  children: React.ReactNode;
}
export function Article({ children, className }: ArticleProps) {
  return <article className={className}>{children}</article>;
}
