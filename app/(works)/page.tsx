
import Image from "next/image";
import Link from "next/link";
import { Tabs, Button, Lay } from "../components/main";
import data from "../data.json";

export default function Works() {
  return (
  

     <Lay cn="container">
        <div className="grid gap-x-8 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
          {data.map((i) => {
            return (
              <Link key={i.path} href={i.path} className="group/item">
                <figure>
                  <div className="aspect-[3/2] overflow-hidden">
                  <Image
                    src={i.cover}
                    priority
                    
                    width={400}
                    height={300}
                    className="w-full  group-hover/item:scale-[1.01]  duration-200 transition-transform transform-gpu rounded"
                    alt={i.title}
                  />
                  </div>
                  <figcaption className="flex text-sm tracking-[-0.006em] transition py-0.5 justify-between text-yask">
                    <span>{i.title}</span>
                    <span className="opacity-50">{i.type}</span>
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </div>
        </Lay>


  );
}
