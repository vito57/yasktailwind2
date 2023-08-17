import { Button, Text, Badge, PortfolioItem } from "@/app/components/server";
import Link from "next/link";
import Image from "next/image";
import data from "../../data.json";
export default function Vito() {
  return (
    <>
      <Text title="About">
        <p className="text-xl">
          Frontend Designer with 12+ years intensive experience in Interfaces
          design, web and app design, frontend development.
        </p>
      </Text>
      <Text title="Top skils">
        <div className="flex gap-1 flex-wrap">
          <Badge>UI/UX</Badge>
          <Badge>Web Dev</Badge>
          <Badge>Web Design</Badge>
          <Badge>Design Systems</Badge>
          <Badge>Material Design</Badge>
          <Badge>Apple Guidelines</Badge>
        </div>
      </Text>
      <Text title="Tools stack">
        <div className="flex gap-1 flex-wrap">
          <Badge>Figma</Badge>
          <Badge>Framer</Badge>
          <Badge>React</Badge>
          <Badge>HTML/CSS/JS</Badge>
          <Badge>NextJS</Badge>
          <Badge>Framer Motion</Badge>
          <Badge>Photoshop</Badge>
          <Badge>Origami Studio</Badge>
          <Badge>Illustrator</Badge>
          <Badge>Blender</Badge>
          <Badge>Cinema 4D</Badge>
        </div>
      </Text>
      <Text title="Experience" subtitle="Total experience — 11 years">
        <dl className="mb-8 text-xl">
          <dt className="font-medium">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              SberDevices
            </Link>
          </dt>

          <dd className="mb-8">
            <span>current workplace, since 2021</span> <br />
            <span className="underline">Responsible for:</span> scripting,
            design, flow, testing, systematization, theming and branding.
            Content products. Voice Interfaces.
            <br />
            <span className="underline">Achievements:</span> launch and
            development of 3 applications on TV, SberPortal and mobile phones.
            Launch of commercial projects based on these applications. The Sport
            app received the Runet Prize 2021
          </dd>
          <dt className="font-medium">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              Sber
            </Link>
          </dt>

          <dd className="mb-8">
            <span>2019—2021</span>
            <br />
            <span className="underline">Responsible for:</span> scripting,
            design, flow, testing, systematization, theming and branding.
            <br />
            <span className="underline">Achievements:</span> launch and
            development of 3 applications on TV, SberPortal and mobile phones.
            Launch of commercial projects based on these applications. The Sport
            app received the 🏆 Runet Prize 2021
          </dd>
          <dt className="font-medium">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              PKVS
            </Link>
          </dt>

          <dd className="mb-8">
            <span>2019—2021</span>
            <br />
            Responsible for: scripting, design, flow, testing, systematization,
            theming and branding.
            <br />
            Achievements: launch and development of 3 applications on TV,
            SberPortal and mobile phones. Launch of commercial projects based on
            these applications. The Sport app received the Runet Prize 2021
          </dd>
          <dt className="font-medium">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              Art.Lebedev Studio
            </Link>
          </dt>

          <dd className="mb-8">
            <span className="italic">2019—2021</span>
            <br />
            Responsible for: scripting, design, flow, testing, systematization,
            theming and branding.
            <br />
            Achievements: launch and development of 3 applications on TV,
            SberPortal and mobile phones. Launch of commercial projects based on
            these applications. The Sport app received the Runet Prize 2021
          </dd>
        </dl>
      </Text>
      <Text title="Works">
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
      </Text>
      <Text title="Awards">
        <div className="flex gap-2">
          <Badge>🏆 Runet Award 2015</Badge>
          <Badge>🏆 Runet Award 2016</Badge>
          <Badge>🏆 Runet Award 2018</Badge>
          <Badge>🏆 Runet Award 2019</Badge>
        </div>
      </Text>
      <Text title="Education">
        <p className="text-xl">
          Oryol State University of Economics and Trade, Adverising, 2006
        </p>
      </Text>
      <Text title="Courses">
        <ul>
          <li>
            {" "}
            <Link className="text-xl ylink" href="/">
              Oryol State University of Economics and Trade, Adverising, 2006
            </Link>
          </li>
          <li>
            {" "}
            <Link className="text-xl ylink" href="/">
              Oryol State University of Economics and Trade, Adverising, 2006
            </Link>
          </li>
        </ul>
      </Text>
    </>
  );
}
