import {
  Button,
  Text,
  Badge,
  PortfolioItem,
  ArticleTopMenu,
  Footer,
} from "@/app/components/server";
import Link from "next/link";
import Image from "next/image";
import data from "../../data.json";
export default function Vito({ params }: any) {
  return (
    <div className="container">
      <ArticleTopMenu title="About us" />
      <header className="text-center mb-6">
        <Image
          className="inline-block mb-2 "
          src="/about/vitaly.png"
          width={80}
          height={80}
          alt="Vitaly Yask."
        />
        <h2 className="text-3xl font-bold">{params.user}</h2>
        <a href="/" className="ylink">
          vitaly@yask.work
        </a>
      </header>
      <div className="flex gap-2 items-center justify-center sticky z-50 top-2 mb-16">
        <Button colorClass="bg-ygrey hover:bg-[#C2CBD6]" path="/">
          Resume.pdf
        </Button>
        <Link href="https://dribbble.com/yask">
          <Image
            src="dribbble.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
        <Link href="https://ui8.net/gala-yask">
          <Image
            src="linkedin.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
        <Link href="https://ui8.net/gala-yask">
          <Image
            src="github.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
      </div>
      <Text title="About">
        <p className="text-xl">
          Designer with 12+ years intensive experience in Interfaces design, web
          and app design, frontend development.
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
          <Badge>Spline 3d</Badge>
          <Badge>D3js</Badge>
          <Badge>Bootstrap/Tailwind</Badge>
        </div>
      </Text>

      <Text title="Experience">
        <dl className="mb-8 text-xl">
          <dt className="font-medium">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              SberDevices
            </Link>
          </dt>

          <dd className="mb-8">
            <span className="opacity-60">current workplace, since 2021</span>{" "}
            <br />
            <span className="font-medium">Responsible for:</span> scripting,
            design, flow, testing, systematization, theming and branding.
            Content products. Voice Interfaces.
            <br />
            <span className="font-medium">Achievements:</span> launch and
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
            <span className="opacity-60">2019-2021</span> <br />
            <span className="font-medium">Responsible for:</span> scripting,
            design, flow, testing, systematization, theming and branding.
            Content products. Voice Interfaces.
            <br />
            <span className="font-medium">Achievements:</span> launch and
            development of 3 applications on TV, SberPortal and mobile phones.
            Launch of commercial projects based on these applications. The Sport
            app received the Runet Prize 2021
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
            <ul className="list-disc list-inside">
              <li>
                <a href="" className="ylink">
                  Karusel
                </a>
              </li>
              <li>
                <a href="" className="ylink">
                  Domkino
                </a>
              </li>
            </ul>
          </dd>
          <dt className="font-medium">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              Art.Lebedev Studio
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
              Yask
            </Link>
          </dt>

          <dd className="mb-8">
            <span>sines 2008</span>
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
      <Text title="Projects">
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
      <Text title="People that inspire me">
        <div className="flex gap-2">
          <Badge>Bret Victor</Badge>
          <Badge>Mike Bostock</Badge>
          <Badge>Oleg Frolov</Badge>
          <Badge>Robbie Tilton</Badge>
        </div>
      </Text>
      <Text title="Education">
        <p className="text-xl">
          State University of Economics and Trade, Adverising, Oryol 2006
        </p>
      </Text>
      <Text title="Courses">
        <ul>
          <li>
            {" "}
            <Link className="text-xl ylink" href="/">
              State University of Economics and Trade, Adverising, Oryol 2006
            </Link>
          </li>
          <li>
            {" "}
            <Link className="text-xl ylink" href="/">
              State University of Economics and Trade, Adverising, Oryol 2006
            </Link>
          </li>
        </ul>
      </Text>
      <Footer />
    </div>
  );
}