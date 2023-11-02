import Link from "next/link";
import Image from "next/image";

//Body image
interface BodyImage {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}
export function BodyImage({
  src,
  width = 1600,
  height = 1200,
  className = "bg-zinc-900",
  alt = "yask",
}: BodyImage) {
  <Image
    src={src}
    width={width}
    height={height}
    className={className}
    alt={alt}
  ></Image>;
}
//Body text
interface BodyTextProps {
  children: React.ReactNode;
}
export function BodyText({ children }: BodyTextProps) {
  return <p className="text-xl">{children}</p>;
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
    <div className="ml-auto z-20 px-4 w-fit items-center flex space-x-4 sticky top-8">
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
  colorClass?: string;
  children: React.ReactNode;
}
export function Button({
  children,
  colorClass = "bg-ylime hover:bg-[#CBEA6E]",
  path,
}: ButtonProps) {
  return (
    <Link
      href={path || "/"}
      className={`text-sm inline-block m-0.5 font-medium transition rounded-xl px-3 py-2 text-ylightblue ${colorClass}`}
    >
      {children}
    </Link>
  );
}
//BADGE
interface BadgeProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}
export function Badge({ className, href, children }: BadgeProps) {
  return (
    <span className="bg-ygrey relative text-sm py-2 mx-0.5 my-0.5 px-4 inline-block rounded-xl font-medium ">
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

//FOOTER
export function Footer() {
  return (
    <p className="text-sm container text-center mt-8 mb-8">
      Copyright © 2023 Yaskevich. v@yask-design.com <br /> Thanks:{" "}
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

  children: React.ReactNode;
}
export function Text({ title, children }: TextProps) {
  return (
    <div className="grid grid-cols-12 gap-8 mb-8">
      <div className="col-span-3">
        <p className="text-xl dark:text-white font-bold">{title}</p>
      </div>
      <div className="col-span-9">{children}</div>
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
        <div className="overflow-hidden rounded">
          <Image
            src={imageSrc}
            quality={100}
            width={1600}
            height={1200}
            className="w-full ease-in group-hover/item:scale-[1.01] duration-200 block transition-transform transform-gpu bg-ygrey "
            alt={imageAlt}
          />
        </div>

        <figcaption className="flex text-sm  group-hover/item:text-ylightblue dark:text-ygrey transition py-0.5 justify-between text-yask">
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
      {figcaption && <figcaption>{figcaption}</figcaption>}
    </figure>
  );
}
//END ARTICLE IMAGE
//ARTICLE HEADER
interface ActicleHeaderProps {
  className?: string;
  children: React.ReactNode;
}
export function ArticleHeader({ className, children }: ActicleHeaderProps) {
  return (
    <header
      id="intro"
      className={`mb-8 pt-[128px] reletive mt-[-128px] ${className}`}
    >
      <div className="container px-4">{children}</div>
    </header>
  );
}
//END ARTICLE HEADER

//FEED ITEM
interface feedItemProps {
  keyNum?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  type?: string;
}
export function FeedItem({
  keyNum,
  href,
  imageSrc,
  imageAlt,
  title,
  type,
}: feedItemProps) {
  return (
    <Link key={keyNum} href={href} className="group/item">
      <figure className="overflow-hidden relative rounded">
        <Image
          src={imageSrc}
          quality={100}
          width={2240}
          height={1680}
          className="w-full ease-in group-hover/item:scale-[1.02] duration-200 block transition-transform transform-gpu"
          alt={imageAlt}
        />
        <span className="text-white absolute right-2 -bottom-8 group-hover/item:bottom-2 text-sm transition-all">
          View on Dribbble
        </span>
      </figure>
    </Link>
  );
}
//END FEED ITEM
//AnimatedLayout
interface AnimateLayoutProps {
  children: React.ReactNode;
}
export function AnimateLayout({ children }: AnimateLayoutProps) {
  return <main className="animate-fadeIn">{children}</main>;
}
