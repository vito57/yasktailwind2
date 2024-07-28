import Image from "next/image";
import { Button, AnimateLayout } from "../../components/server";
import users from "../../users.json";
import Link from "next/link";
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
            <figure key={i.path} className="group/item mb-4 gap-2 items-center md:justify-self-center flex flex-row md:flex-col  md:py-10">
              <Image
                src={i.avatar}
                width={176}
                height={176}
                className=" size-16 md:size-44 group-hover/item:scale-[1.01] rounded-full duration-200 transition-transform transform-gpu"
                alt={i.name}
              />
              <figcaption className="transition grow py-0.5 md:text-center text-yask">
                <p className="font-bold md:text-xl">{i.name}</p>
                <p className=" text-sm">{i.occupation}</p>

              </figcaption>
              <div>
              <Button path={i.path} className="inline-block whitespace-nowrap ybutton secondary">
                  {" "}
                  Read more{" "}
                </Button>
              </div>

            </figure>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="md:w-4/12">
          <h2 className="md:text-3xl  text-2xl mb-8"><span className="text-yred">(a)</span><br />We are a group of freelance designers with extensive work experience. We do design.</h2>
          <dl>
            <dt className="font-bold">Front-end design</dt>
            <dd className="mb-8">Frontend design from scratch. From landing pages to dashboards.
              A modern technology stack: Figma, React, Nextjs, Tailwind/Bootstrap, Git or Framer.

            </dd>

            <dt className="font-bold">Web and app design</dt>
            <dd className="mb-8">Design of any complexity. Desktop, mobile, web. Figma or Framer.
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
        <div className="md:w-3/12 ">
          <h2 className="md:text-3xl text-2xl mb-8 "><span className="text-yred">(b)</span><br />Principles.</h2>
          <dl className="text-base">
            <dt className="font-bold ">Time respectful</dt>
            <dd className="mb-8">Time is the main resource. The user deserves not to see loading or unnecessary animations, the client deserves to get the job done on time.
            </dd>

            <dt className="font-bold">Robust design</dt>
            <dd className="mb-8">Design is not just about how a product looks and works, it about how it lives. Understanding the product, following platform guidelines, understand technologies and process, makes the design robustness.
            </dd>

            <dt className="font-bold">Infinite learning</dt>
            <dd className="mb-8">Innovations are born on the basis of modern technologies and meet the needs of users. To be in a good feet, we keep an eye on technology.
            </dd>
            <dt className="font-bold">Humor</dt>
            <dd className="mb-8">Humor and good mood are the key to productivity. 😊
            </dd>
          </dl>
        </div>
        <div className="md:w-3/12 ">
        <h2 className="md:text-3xl text-2xl mb-8 "><span className="text-yred">(c)</span><br />Contacts.</h2>
<p className="text-base mb-8">Feel free to ask questions in any way convenient for you.</p>
<ul className="text-base list-inside md:list-outside list-decimal">
  <li className="mb-8">
    <Button className="ybutton secondary" path="mailto:vito57rus@gmail.com">vitalyyask@gmail.com</Button>
   
    </li>
  <li >
  <noindex>
  <Button className="ybutton secondary" rel="nofollow" path="https://wa.me/79778192253">Whatsapp chat</Button>
  </noindex> </li>
</ul>

        </div>
      </div>
    </AnimateLayout>
  );
}
