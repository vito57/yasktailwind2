import { list } from "@vercel/blob";
import { Suspense } from "react";
//VIDEO
interface VideoProps {
  width?: number;
  height?: number;
  fileName: string;
  poster?: string;
}
export async function Video({ fileName, width, height, poster }: VideoProps) {
  const { blobs } = await list({
    prefix: "aides-740Ol2XEnDjflhq8lcisNcAUO9C3o6.mp4",
    limit: 1,
  });
  console.log(blobs);
  const { url } = blobs[0];
  return (
    <video
      className="w-full"
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
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
// { width, poster, height, src }: VideoProps
// export default function Video() {
//   return (
//     <Suspense>
//       <VideoComp fileName="aides.mp4" />;
//     </Suspense>
//   );
// }
//END VIDEO
