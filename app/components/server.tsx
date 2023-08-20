import Link from "next/link";
import Image from "next/image";
interface ArticleTopMenuProps {
  title?: string;
}
export function ArticleTopMenu({ title }: ArticleTopMenuProps) {
  return (
    <div className="container z-20 px-4 flex justify-between sticky top-8 my-8  ">
      <div className="flex gap-8 items-center">
        <Image
          src="/yask-logo.svg"
          width={40}
          height={40}
          className="dark:fill-slate-50"
          alt="Yask"
        />
        <span className="font-bold">{title}</span>
      </div>
      <div className="flex gap-8 items-center">
        <Link href="/" className="hover:text-yred transition">
          Works
        </Link>
        <Link href="/about" className="hover:text-yred transition">
          About
        </Link>
        <Link href="/feed" className="hover:text-yred transition">
          Feed
        </Link>
        <Button path="/">Send email</Button>
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
    <div className="container z-20 px-4 justify-end content-center flex space-x-4 sticky top-8">
      <Button path="/">Send email</Button>
      <Link href="https://dribbble.com/yask">
        <Image
          src="dribbble.svg"
          width={40}
          height={40}
          className="rounded-full transition-transform hover:scale-105"
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
interface ButtonProps {
  path: string;
  children: React.ReactNode;
}
export function Button({ children, path }: ButtonProps) {
  return (
    <Link
      href={path || "/"}
      className="text-sm font-medium outline outline-2 outline-[#CBEA6E] transition hover:bg-[#CBEA6E] rounded-xl px-3 py-2 bg-ylime text-ylightblue"
    >
      {children}
    </Link>
  );
}
//BADGE
interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}
export function Badge({ children, className }: BadgeProps) {
  return (
    <span className="bg-ygrey text-sm py-2 mx-0.5 my-0.5 px-4 inline-block rounded-xl font-medium ">
      {children}
    </span>
  );
}

//END BADGE
interface ArticleImageSectionProps {
  data1: { src: string; caption?: string };
  data2: { src: string; caption?: string };
}

export function ArticleImageSection(props: ArticleImageSectionProps) {
  return (
    <div className="flex mt-4 gap-2 mb-14">
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
            <figcaption>{props.data1.caption}</figcaption>
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
            <figcaption>{props.data2.caption}</figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
// interface ArticleDescriptionProps {
//   //className: string;
//   children: React.ReactNode;
// }
// export function ArticleDescription({ children }: ArticleDescriptionProps) {
//   return <div className="mx-auto max-w-screen-md">{children}</div>;
// }
// WORK
//FOOTER
export function Footer() {
  return (
    <p className="text-sm container text-center mt-8 mb-8">
      Copyright © 2023 Yaskevich. <br /> Thanks:{" "}
      <Link href="https://react.dev/" className="text-ylightblue">
        React
      </Link>
      ,
      <Link href="https://tailwindcss.com/" className="text-ylightblue">
        Tailwind
      </Link>
      ,
      <Link href="https://codesandbox.io/" className="text-ylightblue">
        Codesandbox
      </Link>
      ,
      <Link href="https://nextjs.org/" className="text-ylightblue">
        Next
      </Link>
      ,
      <Link href="https://github.com/" className="text-ylightblue">
        Github
      </Link>
    </p>
  );
}
//END FOOTER
//ARTICLE
interface ArticleProps {
  className: string;
  children: React.ReactNode;
}
export function Article({ children, className }: ArticleProps) {
  return <article className={className}>{children}</article>;
}
//END ARTICLE

// TEXT
//text block
interface TextProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}
export function Text({ title, subtitle, children }: TextProps) {
  return (
    <div className="flex gap-8 mb-8">
      <div className=" w-3/12 ">
        <p className="text-xl font-medium">{title}</p>
        {subtitle ? <p>{subtitle}</p> : false}
      </div>
      <div className=" w-9/12 ">{children}</div>
    </div>
  );
}
//END TEXT
//PORTFOLIO ITEM
interface portfolioItemProps {
  keyNum?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  type?: string;
}
export function PortfolioItem({
  keyNum,
  href,
  imageSrc,
  imageAlt,
  title,
  type,
}: portfolioItemProps) {
  return (
    <Link key={keyNum} href={href} className="group/item">
      <figure>
        <div className="overflow-hidden">
          <Image
            src={imageSrc}
            quality={100}
            width={2240}
            height={1680}
            className="w-full ease-in group-hover/item:scale-[1.02] duration-200 block transition-transform transform-gpu rounded"
            alt={imageAlt}
          />
        </div>

        <figcaption className="flex text-sm  group-hover/item:text-ylightblue transition py-0.5 justify-between text-yask">
          <span>{title}</span>
          <span>{type}</span>
        </figcaption>
      </figure>
    </Link>
  );
}
//END PORTFOLIO ITEM
//ARTICLE IMAGE
interface ArticleFigureProps {
  figcaption?: string;
  children: React.ReactNode;
}
export function ArticleFigure({ figcaption, children }: ArticleFigureProps) {
  return (
    <figure className="mb-8">
      {children}

      <figcaption>{figcaption}</figcaption>
    </figure>
  );
}
//END ARTICLE IMAGE
//ARTICLE HEADER
interface ActicleHeaderProps {
  children: React.ReactNode;
}
export function ArticleHeader({ children }: ActicleHeaderProps) {
  return (
    <header id="intro" className="mb-8 pt-[128px] reletive mt-[-128px] ">
      <div className="container px-4">
        {children}
        {/* <Image
          src="/works/drugcode/cover2.png"
          width={1120}
          height={416}
          className="w-full mb-8 rounded"
          alt="Drugcode"
        /> */}
      </div>
    </header>
  );
}
//END ARTICLE HEADER
