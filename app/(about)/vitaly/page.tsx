import { Button, Text, Badge } from "@/app/components/server";
import Link from "next/link";
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
          <dt className="font-bold">
            Designer at{" "}
            <Link href="https://sberdevices.ru/" className="ylink">
              SberDevices
            </Link>
          </dt>
          <dd>since 2021</dd>
          <dd>
            Responsible for: scripting, design, flow, testing, systematization,
            theming and branding.
            <br />
            Achievements: launch and development of 3 applications on TV,
            SberPortal and mobile phones. Launch of commercial projects based on
            these applications. The Sport app received the Runet Prize 2021
          </dd>
        </dl>
      </Text>
    </>
  );
}
