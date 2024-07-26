import Image from "next/image";
import { Button, AnimateLayout } from "../../components/server";
import users from "../../users.json";

export const metadata = {
  title: "About us",
  description: "We design websites and apps",
};

export default function About() {
  return (
    <AnimateLayout>
      <div className="grid md:grid-cols-3">
        {users.map((i) => {
          return (
            <figure key={i.path} className="group/item text-center py-10">
              <Image
                src={i.avatar}
                width={176}
                height={176}
                className="inline-block mb-4 group-hover/item:scale-[1.01] rounded-full  duration-200 transition-transform transform-gpu"
                alt={i.name}
              />
              <figcaption className=" transition py-0.5 justify-center text-yask">
                <p className="font-bold text-xl">{i.name}</p>
                <p className="mb-4  text-sm">{i.occupation}</p>
                <Button path={i.path} className="ybutton secondary">
                  {" "}
                  Read more{" "}
                </Button>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </AnimateLayout>
  );
}
