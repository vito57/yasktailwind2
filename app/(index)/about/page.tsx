import Link from "next/link";
import Image from "next/image";
import { AnimateLayout } from "../../components/client";
import { Button } from "../../components/server";

export default function About() {
  const data = [
    {
      cover: "/about/placeholder.png",
      title: "Vitaly",
      type: "Frontend designer",
      path: "/vitaly",
    },
    {
      cover: "/about/placeholder.png",
      title: "Gala",
      type: "Icon Designer, Illustrator",
      path: "about/gala",
    },
    {
      cover: "/about/placeholder.png",
      title: "Vera",
      type: "Illustrator, Artist",
      path: "about/vera",
    },
  ];
  return (
    <AnimateLayout>
      <div className="grid gap-x-8 gap-y-6 grid-cols-3">
        {data.map((i) => {
          return (
            <figure key={i.path} className="group/item text-center py-10">
              <Image
                src={i.cover}
                width={176}
                height={176}
                className="inline-block mb-4 group-hover/item:scale-[1.01]  duration-200 transition-transform transform-gpu rounded-full"
                alt={i.title}
              />
              <figcaption className=" transition py-0.5 justify-center text-yask">
                <p className="font-bold text-xl">{i.title}</p>
                <p className="mb-4 text-sm">{i.type}</p>
                <Button path={i.path}> Read more </Button>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </AnimateLayout>
  );
}
