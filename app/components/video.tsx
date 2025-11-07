import { Suspense } from "react";
import { list } from "@vercel/blob";
//VIDEO
interface VideoProps {
  width?: number;
  height?: number;
  fileName: string;
  poster?: string;
}
async function VideoComp({ fileName, width, height, poster }: VideoProps) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });

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
export default function Video({ fileName }: VideoProps) {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComp fileName={fileName} />
    </Suspense>
  );
}
//END VIDEO
