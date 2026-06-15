import Image from "next/image";
import { Shimmer, toBase64 } from "./shimmer";
//Body image
interface ArticleImage {
  src: string;
  width?: number;
  height?: number;
  readonly defaultClass?: string;
  className?: string;
  alt?: string;
}
export function ArticleImage({
  src,
  width = 1600,
  height = 1200,
  className,
  defaultClass = "w-full rounded-xl",
  alt = "Yask",
}: ArticleImage) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={defaultClass + " " + className}
      placeholder={`data:image/svg+xml;base64,${toBase64(Shimmer(1600, 1200))}`}
      alt={alt}
    ></Image>
  );
}