import { PortfolioItem, AnimateLayout } from "../components/server";
import data from "../works.json";

export default function Works() {
  return (
    <AnimateLayout>
      <div className="grid gap-x-6 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
        {data.map((i) => {
          return (
            <PortfolioItem
              key={i.title}
              keyNum={i.path}
              href={i.path}
              imageSrc={i.cover}
              imageAlt={i.title}
              title={i.title}
              type={i.type}
            />
          );
        })}
      </div>
    </AnimateLayout>
  );
}
