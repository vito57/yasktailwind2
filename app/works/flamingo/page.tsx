import { AnimateLayout } from "../../components/client";
import { Article, Text } from "../../components/server";
import { Section, ArticleImageSection } from "../../components/server";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode design",
};
export default function Flamingo() {
  return (
    <AnimateLayout>
      <Article className="relative">
        <header id="intro" className="mb-8 pt-[128px] reletive mt-[-128px] ">
          <div className="container px-4">
            <Image
              src="/works/flamingo/flamingo-cover2.png"
              width={2000}
              height={416}
              className="w-full mb-8 rounded"
              alt="Drugcode"
            />
          </div>
        </header>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p className="text-xl">
              Design Sysytem for IOS, Android and adaptive web
            </p>
          </Text>
        </Section>

        <Section id="styles" className="mb-8 px-4 relative container">
          <Text title="Principles">
            <p className="text-xl">find new features, cteate design system</p>
          </Text>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/principles.png"
              width={2400}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
            {/* <figcaption>Code editor</figcaption> */}
          </figure>
        </Section>
        {/* WORKFOW */}
        <Section id="workflow" className="mb-8 px-4 container">
          <Text title="Workflow">
            <ol className="text-xl list-decimal list-inside">
              <li>
                Baseline research (research all systems and it capatabilities)
              </li>
              <li>Making a proposal with a list of components and timeline</li>
              <li>Defining principles</li>
              <li>Styling</li>
              <li>Component design</li>
              <li>Write guidelines</li>
            </ol>
          </Text>
        </Section>
        <Section id="priciples" className="mb-8 px-4 relative container">
          <Text title="Principles">
            <p className="text-xl">
              My role: UI/UX designer <br /> Task: redesign of the existing
              editor, find new features, cteate design system
            </p>
          </Text>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/principles.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
            <figcaption>Code editor</figcaption>
          </figure>
        </Section>
      </Article>
    </AnimateLayout>
  );
}
