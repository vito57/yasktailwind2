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
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="md:w-6/12">
          <h2 className="md:text-3xl  text-2xl mb-8"><span className="text-yred">(a)</span><br />We are a group of freelance designers with extensive work experience. We do design.</h2>
          <dl>
            <dt className="font-bold">Front-end design</dt>
            <dd className="mb-8">Frontend design from scratch. From landing pages to dashboards.
              A modern technology stack: Figma, React, Nextjs, Tailwind/Bootstrap, Git or Framer.

            </dd>

            <dt className="font-bold">Web, app design</dt>
            <dd className="mb-8">Design of any complexity. From promo pages to SaaS. From Apple to web. Desktop, mobile, web. Figma or Framer.
            </dd>

            <dt className="font-bold">Design systems</dt>
            <dd className="mb-8">Optimisation of design processes. Help to design the system, write documentation, mentoring, and consulting.
            </dd>
            <dt className="font-bold">Design icon systems</dt>
            <dd className="mb-8">Design of icon systems. Large icon sets in the style of your brand.
            </dd>
            <dt className="font-bold">Illustrations</dt>
            <dd className="mb-8">Illustrations and animations
            </dd>
          </dl>
        </div>
        <div className="md:w-4/12 ">
          <h2 className="md:text-3xl text-2xl mb-8 "><span className="text-yred">(b)</span><br />Principles.</h2>
          <dl className="text-base">
            <dt className="font-bold ">Time respectful</dt>
            <dd className="mb-8">Time is the main resource. The user deserves not to see downloads or unnecessary animations, the client deserves to get the job done on time.
            </dd>

            <dt className="font-bold">Robust design</dt>
            <dd className="mb-8">Design is not just about how a product looks and works, it about how it lives. Understanding the product, following platform guidelines, understand technologies and process, makes the design robustness.
            </dd>

            <dt className="font-bold">Infinite learning</dt>
            <dd className="mb-8">Innovations are born on the basis of modern technologies and meet the needs of users. To be a good user advocate, you need to keep an eye on technology.
            </dd>
          </dl>
        </div>
      </div>
    </AnimateLayout>
  );
}
