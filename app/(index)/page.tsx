import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "../components/server";
import { Tabs, AnimateLayout } from "../components/client";
import { Button } from "../components/server";
import data from "../data.json";

export default function Works() {
  return (
    <AnimateLayout>
      <div className="grid gap-x-8 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
        {data.map((i) => {
          return (
            <PortfolioItem
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