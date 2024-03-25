import Link from "next/link";
import Image from "next/image";
import dribbble from "../../public/dribbble.svg";
import ui8 from "../../public/ui8.svg";
//shimmer
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f5f5f5" offset="20%" stop-opacity="0" />
      <stop stop-color="#f5f5f5" offset="50%" stop-opacity="0.5" />
      <stop stop-color="#f5f5f5" offset="70%" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f5f5f5" opacity="0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
    
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
  className = "dark:bg-zinc-900 bg-slate-100 w-full rounded-md",
  alt = "Yask",
}: BodyImage) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={className}
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(width=1600, height=1200))}`}
      alt={alt}
    ></Image>
  );
}
//Body text
interface BodyTextProps {
  children: React.ReactNode;
}
export function BodyText({ children }: BodyTextProps) {
  return <p>{children}</p>;
}
//end body text
// TEXT
interface TextProps {
  title?: string;

  children: React.ReactNode;
}
export function Text({ title, children }: TextProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-8">
      {title && (
        <div className="basis-1/4">
          <h3 className="font-bold">{title}</h3>
        </div>
      )}

      <div className={` ${title ? false : "ml-auto"} basis-3/4`}>
        {children}
      </div>
    </div>
  );
}
//END TEXT
interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}
export function Section({ children, className, id }: SectionProps) {
  return (
    <section className={`${className} mb-8`} id={id}>
      {children}
    </section>
  );
}
export function TopMenu() {
  return (
    <div className="px-4 w-fit flex gap-2">
      <Button path="mailto:vito57rus@gmail.com">Send email</Button>
      <Link href="https://dribbble.com/yask">
        <Image
          src={dribbble}
          width={40}
          height={40}
          className="rounded-full transition-transform hover:scale-105"
          alt="Yask Dribbble"
        />
      </Link>
      <Link href="https://ui8.net/gala-yask">
        <Image
          src={ui8}
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
  className?: string;
  children: React.ReactNode;
}
export function Button({
  children,
  className = "ybutton primary",
  path,
}: ButtonProps) {
  return (
    <Link
      href={path || "/"}
      className={`${className}`}
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
    <span className="bg-ygrey relative whitespace-nowrap text-sm py-2 mx-0.5 my-0.5 px-4 inline-block rounded-xl font-medium ">
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
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div className="basis-auto md:basis-1/2">
        <figure>
          <Image
            src={props.data1.src}
            width={1600}
            height={1200}
            className="w-full rounded bg-slate-100 dark:bg-zinc-950"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 1200))}`}
            alt={props.data1.caption || props.data1.src}
          />
          {props.data1.caption && (
            <figcaption className="text-sm">{props.data1.caption}</figcaption>
          )}
        </figure>
      </div>
      <div className="basis-auto md:basis-1/2">
        <figure>
          <Image
            src={props.data2.src}
            width={1600}
            height={1200}
            className="w-full rounded bg-slate-100 dark:bg-zinc-950"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 1200))}`}
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

//FOOTER
export function Footer() {
  return (
    <p className="text-sm text-center mt-8 mb-8">
      Copyright © 2023 Yaskevich. <br /> Thanks:{" "}
      <Link href="https://react.dev/" className="ylink">
        React
      </Link>
      ,
      <Link href="https://tailwindcss.com/" className="ylink">
        Tailwind
      </Link>
      ,
      <Link href="https://codesandbox.io/" className="ylink">
        Codesandbox
      </Link>
      ,
      <Link href="https://nextjs.org/" className="ylink">
        Next
      </Link>
      ,
      <Link href="https://github.com/" className="ylink">
        Github
      </Link>
      <br/>
      The site does not collect any information about the users.
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
  return <article className={`${className} mb-8`}>{children}</article>;
}
//END ARTICLE

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
            width={800}
            height={600}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
            className="w-full ease-in group-hover/item:scale-[1.01] duration-200 block transition-transform transform-gpu bg-ygrey "
            alt={imageAlt}
          />
        </div>

        <figcaption className="flex text-sm  group-hover/item:text-ylightblue group-hover/item:dark:text-ytextdark/75 dark:text-ytextdark transition py-0.5 justify-between text-yask">
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
      {figcaption && (
        <figcaption className="dark:text-white text-yask/80">
          {figcaption}
        </figcaption>
      )}
    </figure>
  );
}
//END ARTICLE IMAGE
//Article Hero
interface ArticleHeroSectionProps {
 
  children: React.ReactNode;
  underTitle?: string;
  title?: string;
  subTitle?: string;
  btnTxt?:string;
  buttonUrl?: any;
}
export function ArticleHeroSection({ children, buttonUrl, btnTxt="Download on UI8", underTitle, title, subTitle }: ArticleHeroSectionProps){
  return(
    <figure className="mb-8 relative">
    {children}
    <figcaption className="relative pb-8 md:pb-0 md:absolute  md:top-8 md:right-8 md:bottom-8 md:left-8 top-0 left-0  flex flex-col justify-center ">
              <div className="md:max-w-sm">
                <p className="text-sm md:text-base mb-2 opacity-75">{underTitle}</p>
                <h1 className="text-xl md:text-4xl mb-2 font-bold ">
              {title}
                </h1>
                <p className="text-base  mb-4 opacity-75">
              {subTitle}
                </p>
                <Button className="ybutton secondary w-full md:w-auto" path={buttonUrl}>{btnTxt}</Button>
              </div>
            </figcaption>
  </figure>
  )
}
//End Aticle Header
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
      <div className="container">{children}</div>
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
          width={800}
          height={600}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}

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
  className?: string;
  children: React.ReactNode;
}
export function AnimateLayout({ children, className }: AnimateLayoutProps) {
  return (
    <main className={`${className} animate-fadeIn text-base md:text-xl`}>
      {children}
    </main>
  );
}
