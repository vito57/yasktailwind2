import Image from "next/image";
import users from "../../../data/users.json";
import Link from "next/link";
import LayoutAnimated from "@/components/global/layoutanimated";
import { Metadata } from "next/types";
import { Button } from "@/components/ui/button";
import EmailButton from "@/components/global/emailbutton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";
import { Plus } from "lucide-react";
export const metadata: Metadata = {
  title: "About us",
  description: "We design websites and apps",
};

export default function About() {
  return (
    <LayoutAnimated>
      <br />
      <div className="grid md:grid-cols-3">
        {users.map((i) => {
          return (
            <figure
              key={i.path}
              className="group/item mb-4 gap-2 items-center md:justify-self-center flex flex-row md:flex-col  md:py-10"
            >
              <Avatar
                className={
                  "size-12 md:size-30 lg:size-40 p-0.5 bg-linear-[90deg,#C8BFFF,#A8D8F0,#D9F66F,#FFB899,#F5F2EB]"
                }
              >
                <AvatarImage
                  className={"bg-primary-foreground"}
                  src={i.avatar}
                  alt={i.name}
                />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <figcaption className="transition grow md:text-center">
                <p className="font-bold text-ellipsis">{i.name}</p>
                <p className="text-sm text-muted-foreground text-ellipsis">
                  {i.occupation}
                </p>
              </figcaption>
              <div>
                <Button
                  variant="secondary"
                  nativeButton={false}
                  render={<Link href={i.path} />}
                >
                  Read more
                </Button>
              </div>
            </figure>
          );
        })}
      </div>
      <br />
      <div className="flex flex-col gap-2 text-pretty max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl">We are doing</h2>
          <br />
          <dl>
            <dt className="font-bold">Front-end design</dt>
            <dd>
              Combine design with frontend development to create stunning
              mockups using Figma or Penpot, along with production-ready code in
              Next.js, Tailwind, or standard HTML, CSS, and JavaScript.
            </dd>
            <br />
            <dt className="font-bold">Product design</dt>
            <dd>
              Whether it's desktop, mobile, or web, you'll receive beautifully
              crafted mockups in Figma or Penpot, complete with thorough
              documentation.
            </dd>
            <br />
            <dt className="font-bold">Design systems</dt>
            <dd>
              We create stunning design systems adapted to any platform.
              Optimize workflows and provide support through documentation,
              mentoring, and consultations.
            </dd>
            <br />
            <dt className="font-bold">Design icon systems</dt>
            <dd>
              We design beautiful icon sets in various sizes and develop
              harmonious icon systems that enhance user experience.{" "}
            </dd>
            <br />
            <dt className="font-bold">Content design</dt>
            <dd>Illustrations, banners, graphics and animations</dd>
          </dl>
        </div>
        {/* <div className="md:w-3/12 ">
          <h2 className=" text-2xl ">
            <small className="text-muted-foreground font-mono">(b)</small>
            <br />
            Principles
          </h2>

          <br />
          <dl className="text-base">
            <dt className="font-bold">Time respectful</dt>
            <dd>Dont waste your own and other peoples time.</dd>
            <br />
            <dt className="font-bold">Robust design</dt>
            <dd>
              Understanding the product, following platform guidelines,
              understand technologies and process, makes the design reasonable
              and robustness.
            </dd>
            <br />
            <dt className="font-bold">Infinite learning</dt>
            <dd>To be in a good feet, keep an eye on technology.</dd>
            <br />
            <dt className="font-bold">Humor</dt>
            <dd>Humor and good mood are the key to productivity. 😊</dd>
          </dl>
        </div> */}
        <br />
        <div>
          <h2 className="text-2xl ">Contacts</h2>
          <br />
          <ul className="list-none">
            <li>
              <EmailButton />
            </li>
          </ul>
        </div>
      </div>
    </LayoutAnimated>
  );
}
