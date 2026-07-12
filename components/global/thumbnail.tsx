import Link from "next/link";
import Image from "next/image";
import { Shimmer, toBase64 } from "./shimmer";

interface thumbProps {
  keyNum?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  type?: string;

  testimonials?:
  | { testimonial: string; user: string; img: string; role: string }
  | undefined;
}
export default function Thumbnail({
  keyNum,
  href,
  imageSrc,
  imageAlt,
  title,
  type,
  testimonials,
}: thumbProps) {
  return (
    <figure key={keyNum} className="group/item">
      <div className="relative">
        {/* {testimonials && <Toggle aria-label="Toggle bookmark" className="absolute z-10 top-1 right-1" >
          <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
        </Toggle>} */}
        <Link href={href}>
          <Image
            src={imageSrc}
            width={800}
            height={600}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              Shimmer(800, 600)
            )}`}
            className="w-full ease-in group-hover/item:brightness-95 duration-200 block transition-all transform-gpu bg-secondary rounded-xl"
            alt={imageAlt}
          />
        </Link>
      </div>

      <figcaption className="flex text-sm  group-hover/item:text-primary/75 dark:group-hover/item:text-ytextdark/75 dark:text-ytextdark transition py-0.5 justify-between text-primary">
        {title && <span>{title}</span>}
        {type && <span>{type}</span>}
      </figcaption>
    </figure>
  );
}
