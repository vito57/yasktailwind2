import Image from "next/image";
import Link from "next/link";
import { Tabs, AnimateLayout } from "../components/client";
import { Button } from "../components/server";
import data from "../data.json";

export default function Works() {
  return (
    <AnimateLayout>
      <div className="grid gap-x-8 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
        {data.map((i) => {
          return (
            <Link key={i.path} href={i.path} className="group/item">
              <figure>
                <Image
                  src={i.cover}
                  quality={100}
                  width={400}
                  height={300}
                  className="w-full group-hover/item:scale-[1.01]  duration-200 transition-transform transform-gpu rounded"
                  alt={i.title}
                />

                <figcaption className="flex text-sm  transition py-0.5 justify-between text-yask">
                  <span>{i.title}</span>
                  <span className="opacity-50">{i.type}</span>
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </div>
    </AnimateLayout>
  );
}
