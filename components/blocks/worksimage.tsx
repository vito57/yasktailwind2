import Image from "next/image";
import { Shimmer, toBase64 } from "../global/shimmer";
//Body image
interface WorksImage {
  src: string;
  width?: number;
  height?: number;
  readonly defaultClass?: string;
  className?: string;
  alt?: string;
}
export default function WorksImage({
  src,
  width = 1600,
  height = 1200,
  className,
  defaultClass = "w-full rounded-xl bg-secondary",
  alt = "yask.work",
}: WorksImage) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={`${defaultClass} ${className}`}
      placeholder={`data:image/svg+xml;base64,${toBase64(Shimmer(1600, 1200))}`}
      alt={alt}
    ></Image>
  );
}