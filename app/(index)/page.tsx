import { Thumbnail } from "@/components/blocks/thumbnail";

import data from "../works.json";
import { LayoutAnimated } from "@/components/regions/layoutanimated";

export default function Works() {
  return (
    <LayoutAnimated>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
        {data.map((i) => {
          return (
            <Thumbnail
              key={i.title}
              keyNum={i.path}
              href={i.path}
              imageSrc={i.cover}
              imageAlt={i.title}
              title={i.title}
              type={i.type}
              testimonials={i.testimonials}
            />
          );
        })}
      </div>
    </LayoutAnimated>
  );
}
