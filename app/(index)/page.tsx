import { PortfolioItem, AnimateLayout } from "../components/server";
import data from "../works.json";

export default function Works() {
  return (
    <AnimateLayout>
      <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
        {data.map((i) => {
          return (
            <PortfolioItem
              key={i.title}
              keyNum={i.path}
              href={i.path}
              imageSrc={i.cover.url}
              imageAlt={i.title}
              title={i.title}
              poster={i.cover.url}
              isVideo={!!i.cover.videoUrl}
              type={i.type}
              videoUrl={i.cover.videoUrl}
            />
          );
        })}
      </div>
    </AnimateLayout>
  );
}
