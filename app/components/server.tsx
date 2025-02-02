import Link from "next/link";
import Image from "next/image";
import dribbble from "../../public/dribbble.svg";
import ui8 from "../../public/ui8.svg";
import { Children, Suspense } from "react";
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
  readonly defaultClass?: string;
  className?: string;
  alt?: string;
}
export function BodyImage({
  src,
  width = 1600,
  height = 1200,
  className,
  defaultClass = "dark:bg-zinc-900 bg-slate-100 w-full rounded-xl",
  alt = "Yask",
}: BodyImage) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={defaultClass + " " + className}
      placeholder={`data:image/svg+xml;base64,${toBase64(
        shimmer((width = 1600), (height = 1200))
      )}`}
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
// TEXT main text layout block
interface TextProps {
  title?: string;

  children: React.ReactNode;
}
export function Text({ title, children }: TextProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-6">
      {title && (
        <div className="basis-1/4">
          <h3 className="font-bold">{title}</h3>
        </div>
      )}

      <div className={` ${title ? false : "ml-auto"} text-pretty basis-3/4`}>
        {children}
      </div>
    </div>
  );
}
//END TEXT
//SECTION section layout
interface SectionProps {
  className?: string;
  fluid?: boolean;
  id?: string;
  children: React.ReactNode;
}
export function Section({
  children,
  fluid = false,
  className,
  id,
}: SectionProps) {
  const isFluid = fluid ? null : "container";
  return (
    <section className={`${className} ${isFluid} mb-8`} id={id}>
      {children}
    </section>
  );
}
//END SECTION
//TOPMENU
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
//END TOP MENU

//BUTTON
interface ButtonProps {
  path: string;
  className?: string;
  rel?: string;
  children: React.ReactNode;
}
export function Button({
  children,
  rel,
  className = "text-ylightblue bg-ylime",
  path,
}: ButtonProps) {
  const BtnClass = `text-sm text-center m-0.5 font-medium rounded-xl px-3 py-2 inline-block transition-all hover:brightness-95 focus:brightness-95 ${className}`;

  return (
    <Link href={path || "/"} rel={rel} className={BtnClass}>
      {children}
    </Link>
  );
}
//END BUTTON
//testimonials
interface TestimonialsButtonProps {
  dataset: { testimonial: string; user: string; img: string; role: string };
}
export function TestimonialsButton({ dataset }: TestimonialsButtonProps) {
  return (
    <div className="absolute ytestimonials flex w-9 h-9 z-10 overflow-visible flex-col top-1 right-1">
      <label
        className="ytestimonials_button has-[:checked]:bg-ylime cursor-pointer peer relative inline-block fill-ylime has-[:checked]:fill-yred rounded-full p-1.5 hover:scale-105 transform-gpu transition-transform bg-yred group primary
        "
      >
        <input type="checkbox" className="invisible hidden peer" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="peer-checked:hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" />
          <path d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z" />
          <path d="M16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 19H15L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L9 19H7C4.23858 19 2 16.7614 2 14V8C2 5.23858 4.23858 3 7 3H17C19.7614 3 22 5.23858 22 8V14C22 16.7614 19.7614 19 17 19ZM14.3787 17.5L12 19.8787L9.62132 17.5H7C5.067 17.5 3.5 15.933 3.5 14V8C3.5 6.067 5.067 4.5 7 4.5H17C18.933 4.5 20.5 6.067 20.5 8V14C20.5 15.933 18.933 17.5 17 17.5H14.3787Z"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="hidden fill-yred peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L12 10.9393L19.4697 3.46967C19.7626 3.17678 20.2374 3.17678 20.5303 3.46967C20.8232 3.76256 20.8232 4.23744 20.5303 4.53033L13.0607 12L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L12 13.0607L4.53033 20.5303C4.23744 20.8232 3.76256 20.8232 3.46967 20.5303C3.17678 20.2374 3.17678 19.7626 3.46967 19.4697L10.9393 12L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z"
          />
        </svg>
      </label>
      <div className="hidden flex-col peer-hover:flex peer-has-[:checked]:flex items-end ytestimonials_testimonial">
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          className="fill-ylime mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0C10 5.52286 5.52283 10 0 10H20C14.4772 10 10 5.52286 10 0Z" />
        </svg>

        <div className="reletive p-5 flex flex-col gap-3 rounded-2xl w-72  bg-ylime">
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            className="fill-ydarkbrown"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.225 0C2.33931 0 0 2.29827 0 5.13333V12.6C0 13.3732 0.637994 14 1.425 14H5.225C6.01201 14 6.65 13.3732 6.65 12.6V8.86667C6.65 8.09347 6.01201 7.46667 5.225 7.46667H2.85V5.13333C2.85 3.84467 3.91332 2.8 5.225 2.8H6.175C6.96201 2.8 7.6 2.1732 7.6 1.4C7.6 0.626801 6.96201 0 6.175 0H5.225Z" />
            <path d="M16.625 0C13.7393 0 11.4 2.29827 11.4 5.13333V12.6C11.4 13.3732 12.038 14 12.825 14H16.625C17.412 14 18.05 13.3732 18.05 12.6V8.86667C18.05 8.09347 17.412 7.46667 16.625 7.46667H14.25V5.13333C14.25 3.84467 15.3133 2.8 16.625 2.8H17.575C18.362 2.8 19 2.1732 19 1.4C19 0.626801 18.362 0 17.575 0H16.625Z" />
          </svg>

          <p className="text-ydarkbrown text-sm font-medium leading-5">
            {dataset.testimonial}
          </p>

          <div className="flex items-center gap-2">
            <div className="bg-yred flex items-center  font-bold text-ytextdark p-2 rounded-full text-sm  leading-4 aspect-square">
              {dataset.img}
            </div>
            <div>
              <p className="text-ybrown font-bold leading-4 text-sm">
                {dataset.user}
              </p>
              <p className="text-ybrown capitalize leading-4 text-sm">
                {dataset.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//BADGE
interface SpanButtonProps {
  className?: string;
  href?: string;
  badge?: string;
  children: React.ReactNode;
}
export function SpanButton({
  className,
  href,
  badge,
  children,
}: SpanButtonProps) {
  const userOverrides = className ? className : "";
  const defaultClass =
    "bg-ygrey relative whitespace-nowrap text-sm py-2 mx-0.5 my-0.5 px-4 inline-block rounded-xl font-medium";

  return href ? (
    <Button path={href} className="text-ylightblue bg-ygrey">
      {children}
      {badge ? <Badge>{badge}</Badge> : false}
    </Button>
  ) : (
    <span className={defaultClass + " " + userOverrides}>
      {children} {badge ? <Badge>{badge}</Badge> : false}
    </span>
  );
}
//END BADGE

//BADGE text hightliter
interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}
export function Badge({ className, children }: BadgeProps) {
  const DefaultClass =
    "bg-yblue text-ybg ml-1 text-xs relative whitespace-nowrap leading-none p-0.5 inline-block rounded-sm font-medium align-baseline capitalize";
  return <span className={DefaultClass}>{children}</span>;
}
//END BADGE

//IMAGE GRID
interface ArticleImageGridProps {
  children: React.ReactNode;
}
export function ArticleImageGrid(props: ArticleImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
      {props.children}
    </div>
  );
}
//END IMAGE GRID

//ArticleImageSection DEPRICATED USE ARTICLEIMAGEGRID
interface ArticleImageSectionProps {
  image1: { src: string; caption?: string };
  image2: { src: string; caption?: string };
  className?: string;
  height?: number;
}

export function ArticleImageSection(props: ArticleImageSectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-6">
      <div className="basis-auto md:basis-1/2">
        <ArticleFigure figcaption={props.image1.caption} className="mb-0">
          <BodyImage
            src={props.image1.src}
            className={props.className}
            height={props.height}
            alt={props.image1.caption || props.image1.src}
          />
        </ArticleFigure>
      </div>
      <div className="basis-auto md:basis-1/2">
        <ArticleFigure figcaption={props.image2.caption} className="mb-0">
          <BodyImage
            src={props.image2.src}
            height={props.height}
            className={props.className}
            alt={props.image2.caption || props.image2.src}
          />
        </ArticleFigure>
      </div>
    </div>
  );
}

//FOOTER
export function Footer() {
  return (
    <p className="text-sm text-center mt-8 mb-8">
      Copyright © 2023—2025 Yask.. <br /> Thanks:{" "}
      <Link href="https://react.dev/" className="ylink">
        React
      </Link>
      ,{" "}
      <Link href="https://tailwindcss.com/" className="ylink">
        Tailwind
      </Link>
      ,{" "}
      <Link href="https://penpot.app/" className="ylink">
        Penpot
      </Link>
      ,{" "}
      <Link href="https://nextjs.org/" className="ylink">
        Next
      </Link>
      ,{" "}
      <Link href="https://github.com/" className="ylink">
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
  poster: string;
  isVideo?: boolean;
  videoUrl: string;
  testimonials?:
    | { testimonial: string; user: string; img: string; role: string }
    | undefined;
}
export function PortfolioItem({
  keyNum,
  href,
  imageSrc,
  imageAlt,
  title,
  type,
  testimonials,
  videoUrl,
  poster,
  isVideo = false,
}: portfolioItemProps) {
  return (
    <figure key={keyNum} className="group/item">
      <div className="relative">
        {testimonials && <TestimonialsButton dataset={testimonials} />}
        <Link href={href}>
          <Image
            src={imageSrc}
            width={800}
            height={600}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(800, 600)
            )}`}
            className="w-full ease-in group-hover/item:scale-[1.01] duration-200 block transition-transform transform-gpu bg-ygrey rounded-xl"
            alt={imageAlt}
          />
        </Link>
      </div>

      <figcaption className="flex text-sm  group-hover/item:text-ylightblue dark:group-hover/item:text-ytextdark/75 dark:text-ytextdark transition py-0.5 justify-between text-yask">
        {title && <span>{title}</span>}
        {type && <span>{type}</span>}
      </figcaption>
    </figure>
  );
}
//END PORTFOLIO ITEM
//VIDEO
interface VideoProps {
  width?: number;
  height?: number;
  src: string;
  poster: string;
}
export function Video({ width = 800, poster, height = 600, src }: VideoProps) {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <video
        className="w-full ease-in -z-10 object-cover group-hover/item:scale-[1.01] duration-200 block transition-transform transform-gpu bg-ygrey "
        width={width}
        height={height}
        poster={poster}
        controls={false}
        playsInline
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Suspense>
  );
}
//END VIDEO
//ARTICLE IMAGE
interface ArticleFigureProps {
  figcaption?: string;
  className?: string;
  children: React.ReactNode;
}
export function ArticleFigure({
  figcaption,
  children,
  className = "mb-6",
}: ArticleFigureProps) {
  return (
    <figure className={className}>
      {children}
      {figcaption && (
        <figcaption className="text-sm mt-1">{figcaption}</figcaption>
      )}
    </figure>
  );
}
//END ARTICLE IMAGE
//PORTFOLIO HERO UNIT
interface ArticleHeroSectionProps {
  children: React.ReactNode;
  underTitle?: string;
  title?: string;
  subTitle?: string;
  btnTxt?: string;
  buttonUrl?: any;
  credits?: string;
}
export function ArticleHeroSection({
  children,
  buttonUrl,
  btnTxt = "Purchase Set →",
  underTitle,
  title,
  subTitle,
  credits,
}: ArticleHeroSectionProps) {
  return (
    <figure className="mb-8 relative">
      {children}
      <figcaption className="relative pb-8 md:pb-0 md:absolute  md:top-8 md:right-8 md:bottom-8 md:left-8 top-0 left-0  flex flex-col justify-center ">
        <div className="md:max-w-md">
          <p className="text-sm md:text-base mb-2 ">{underTitle}</p>
          <h1 className="text-2xl font-display md:text-5xl mb-2 ">{title}</h1>
          <p className="text-base mb-4 ">{subTitle}</p>
          {credits && (
            <p className="text-sm tracking-widest mb-4 ">{credits}</p>
          )}
          <Button
            className="ybutton secondary w-full md:w-auto"
            path={buttonUrl}
          >
            {btnTxt}
          </Button>
        </div>
      </figcaption>
    </figure>
  );
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
    <figure className="relative group/item ">
      <Link key={keyNum} href={href} className="">
        <Image
          src={imageSrc}
          width={800}
          height={600}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(800, 600)
          )}`}
          className="w-full ease-in rounded-xl group-hover/item:scale-[1.02] duration-200 block transition-transform transform-gpu"
          alt={imageAlt}
        />
      </Link>
      <span className="text-white absolute right-2 -bottom-8 group-hover/item:bottom-2 text-sm transition-all">
        View on Dribbble
      </span>
    </figure>
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
//Summary
interface SummaryProps {
  designer: string;
  client?: string;
  link?: any;
  year: string;
}
export function Summary({ designer, client, link, year }: SummaryProps) {
  return (
    <div>
      <p>
        Designer:{" "}
        <Link className="ylink capitalize" href={`/${designer}`}>
          {designer}
        </Link>
      </p>
      {client && <p>Client: {client}</p>}

      {link && (
        <p>
          Live:{" "}
          <Link className="ylink" href={link}>
            {link}
          </Link>
        </p>
      )}
      <p>Year: {year} </p>
    </div>
  );
}
//End Summary
