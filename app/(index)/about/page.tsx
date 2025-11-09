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
            <figure
              key={i.path}
              className="group/item mb-4 gap-2 items-center md:justify-self-center flex flex-row md:flex-col  md:py-10"
            >
              <Image
                src={i.avatar}
                width={176}
                height={176}
                className=" size-16 md:size-44 group-hover/item:scale-[1.01] rounded-full  duration-200 transition-transform transform-gpu"
                alt={i.name}
              />
              <figcaption className="transition grow py-0.5 md:text-center text-yask">
                <p className="font-bold md:text-xl">{i.name}</p>
                <p className=" text-sm">{i.occupation}</p>
              </figcaption>
              <div>
                <Button path={i.path} className=" secondary">
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
          <h2 className="md:text-3xl text-2xl">
            <span className="text-yred">(a)</span>
            <br />
            We are designers, with extensive work experience. We do:
          </h2>
          <br />
          <dl>
            <dt>Front-end design</dt>
            <dd>
              Design and frontend development together. The output is mockups
              (Figma or Penpot) and production ready code (Nextjs,Tailwind or
              HTML, CSS, JS).
            </dd>
            <br />
            <dt>UI/UX design</dt>
            <dd>
              Desktop, mobile or web. The output is well ducumented mockups in
              Figma or Penpot.
            </dd>
            <br />
            <dt>Design systems</dt>
            <dd>
              Design systems for any platform. Optimisation of design processes.
              Help to write documentation, mentoring, and consulting. Figma or
              Penpot in output.
            </dd>
            <br />
            <dt>Design icon systems</dt>
            <dd>
              We design large and small icon sets, and develop icon systems.
            </dd>
            <br />
            <dt>Content design</dt>
            <dd>Illustrations, banners, graphics and animations</dd>
          </dl>
        </div>
        <div className="md:w-3/12 ">
          <h2 className="md:text-3xl text-2xl ">
            <span className="text-yred">(b)</span>
            <br />
            Principles.
          </h2>
          <br />
          <blockquote className="text-sm">
            Everything you need is simple!
          </blockquote>
          <br />
          <dl className="text-base">
            <dt>Time respectful</dt>
            <dd>Dont waste your own and other peoples time.</dd>
            <br />
            <dt>Robust design</dt>
            <dd>
              Understanding the product, following platform guidelines,
              understand technologies and process, makes the design reasonable
              and robustness.
            </dd>
            <br />
            <dt>Infinite learning</dt>
            <dd>To be in a good feet, keep an eye on technology.</dd>
            <br />
            <dt>Humor</dt>
            <dd>Humor and good mood are the key to productivity. 😊</dd>
          </dl>
        </div>
        <div className="md:w-3/12 ">
          <h2 className="md:text-3xl text-2xl ">
            <span className="text-yred">(c)</span>
            <br />
            Contacts.
          </h2>
          <br />

          <ul className="text-base list-none">
            <li>
              <Button path="mailto:vitalyyask@gmail.com">
                vitalyyask@gmail.com
              </Button>
            </li>
            <li>
              <noindex>
                <Button
                  className="secondary"
                  rel="nofollow"
                  path="https://wa.me/79778192253"
                >
                  Whatsapp chat
                </Button>
              </noindex>{" "}
            </li>
          </ul>
        </div>
      </div>
    </AnimateLayout>
  );
}
