import Image from "next/image";
import users from "../../users.json";
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
      <div className="grid md:grid-cols-3">
        {users.map((i) => {
          return (
            <figure
              key={i.path}
              className="group/item mb-4 gap-2 items-center md:justify-self-center flex flex-row md:flex-col  md:py-10"
            >
              <Avatar className={"size-12 md:size-30 lg:size-40 "}>
                <AvatarImage src={i.avatar} alt={i.name} />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <figcaption className="transition grow md:text-center">
                <p className="font-bold md:text-xl text-ellipsis">{i.name}</p>
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
      <div className="flex flex-col md:flex-row justify-between gap-5 text-pretty">
        <div className="md:w-4/12">
          <h2 className="text-2xl">
            <small className="text-muted-foreground font-mono">(a)</small>
            <br />
            We do
          </h2>
          <br />
          <dl>
            <dt className="font-bold">Front-end design</dt>
            <dd>
              Design and frontend development together. The output is mockups
              (Figma or Penpot) and production ready code (Nextjs,Tailwind or
              HTML, CSS, JS).
            </dd>
            <br />
            <dt className="font-bold">UI/UX design</dt>
            <dd>
              Desktop, mobile or web. The output is well ducumented mockups in
              Figma or Penpot.
            </dd>
            <br />
            <dt className="font-bold">Design systems</dt>
            <dd>
              Design systems for any platform. Optimisation of design processes.
              Help to write documentation, mentoring, and consulting. Figma or
              Penpot in output.
            </dd>
            <br />
            <dt className="font-bold">Design icon systems</dt>
            <dd>
              We design large and small icon sets, and develop icon systems.
            </dd>
            <br />
            <dt className="font-bold">Content design</dt>
            <dd>Illustrations, banners, graphics and animations</dd>
          </dl>
        </div>
        <div className="md:w-3/12 ">
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
        </div>
        <div className="md:w-3/12 ">
          <h2 className=" text-2xl ">
            <small className="text-muted-foreground font-mono">(c)</small>
            <br />
            Contacts
          </h2>
          <br />

          <ul className="text-base list-none">
            <li>
              <EmailButton />
            </li>
          </ul>
        </div>
      </div>
    </LayoutAnimated>
  );
}
