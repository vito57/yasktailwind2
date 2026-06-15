import Link from "next/link";
import Image from "next/image";
import { Shimmer, toBase64 } from "./shimmer";
//FEED ITEM
interface ThumbnailFeedProps {
  keyNum?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  type?: string;
}
export function ThumbnailFeed({
  keyNum,
  href,
  imageSrc,
  imageAlt,
  title,
  type,
}: ThumbnailFeedProps) {
  return (
    <figure className="relative group/item overflow-hidden">
      <Link key={keyNum} href={href} className="">
        <Image
          src={imageSrc}
          width={800}
          height={600}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            Shimmer(800, 600)
          )}`}
          className="w-full ease-in rounded-xl group-hover/item:brightness-95 duration-200 block transition-all transform-gpu"
          alt={imageAlt}
        />
      </Link>
      <span className="text-white absolute right-2 -bottom-8 group-hover/item:bottom-2 mix-blend-difference text-sm transition-all">
        {title || "View on Dribbble"}
      </span>
    </figure>
  );
}
//END FEED ITEM