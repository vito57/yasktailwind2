import { AnimateLayout, Accordeon } from "../../components/client";
import { Article, ArticleSubMenu } from "../../components/server";
import {
  Section,
  ArticleImageSection,
  ArticleDescription,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode design",
};

export default function Drugcode() {
  return (
    <AnimateLayout className="bg-black text-[#C2D2FF]">
      <Article className="relative">
        <header id="intro" className="mb-8 pt-[128px] reletive mt-[-128px] ">
          <div className="container px-4">
            <Image
              src="/works/drugcode/cover2.png"
              width={1120}
              height={416}
              className="w-full mb-8 rounded"
              alt="Drugcode"
            />
          </div>
        </header>

        <Section id="about" className="mb-8 px-4 relative container">
          <Accordeon title="About" expanded={true} id="1">
            <p className="text-xl">
              Code editor design for internal projects.
              <br />
              <span className="font-semibold">My role:</span> UI/UX designer{" "}
              <br /> <span className="font-semibold">Task:</span> redesign of
              the existing editor, find new features, cteate design system
            </p>
          </Accordeon>

          <figure className="mb-4">
            <Image
              src="/works/drugcode/code.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>Code editor</figcaption>
          </figure>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/node.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>Node editor</figcaption>
          </figure>
          <Accordeon title="" expanded={true} id="1">
            <p className="text-xl">
              The editor consists of 2 main modes: code editor and node editor.
              Visual editing is carried out in the preview window. Supports
              system theming (dark and light theme). The node editor represents
              any JavaScript object as a node.
            </p>
          </Accordeon>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/node-editor-light.png"
              width={1600}
              height={1200}
              className=" rounded"
              alt="Drugcode ui"
            />
            <figcaption className="text-sm">Light theme</figcaption>
          </figure>
        </Section>
        {/* WORKFOW */}
        <Section id="workflow" className="mb-8 px-4 container">
          <Accordeon title="Workflow" expanded={true} id="1">
            <ol className="text-xl list-decimal list-inside">
              <li>
                Baseline research (Interview, Interview in context,
                observations)
              </li>
              <li>
                Making a <span className="font-medium">proposal</span> of new
                features and improvements
              </li>
              <li>Prototyping</li>
              <li>Creating design and specification</li>
              <li>Field supervision</li>
            </ol>
          </Accordeon>
        </Section>
        {/* BRANDING */}

        <Section id="branding" className="mb-8 px-4 container">
          <Accordeon title="Branding" expanded={true} id="2">
            <p className="text-xl">
              In the process of work, it became necessary to create a logo and
              style. Didn't take long, but got a lot done.
            </p>
          </Accordeon>
          <ArticleImageSection
            data1={{ src: "/works/drugcode/brand.png" }}
            data2={{
              src: "/works/drugcode/brand-guide.png",
            }}
          />
          {/* <ArticleImageSection
              data1={{
                src: "/works/drugcode/structure.png",
              }}
              data2={{
                src: "/works/drugcode/layout.png",
              }}
            /> */}
        </Section>
        {/* UI/UX */}
        <Section id="ux" className="mb-8 px-4 container">
          <Accordeon title="UI/UX" expanded={true} id="2">
            <p className="text-xl">
              After basic research and creation of a proposal, We take out the
              styles, making a templates and prepare the specification.{" "}
              <Link href="" className="text-ylightblue">
                Material design
              </Link>{" "}
              is taken as the basis.
            </p>
          </Accordeon>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/ui.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>UI kit</figcaption>
          </figure>
          <ArticleImageSection
            data1={{
              src: "/works/drugcode/style.png",
              caption: "Style guide. Material theme",
            }}
            data2={{
              src: "/works/drugcode/layout.png",
              caption: "Template structure",
            }}
          />

          <Accordeon title="" expanded={true} id="2">
            <p className="text-xl">
              We follow the pattern Template / Region / Component / Element and
              the modifier. A mix of atomic design principles and BEM
              methodology. More then 80 components are created.
            </p>
          </Accordeon>
          <ArticleImageSection
            data1={{
              src: "/works/drugcode/node_func.png",
              caption: "Representing function as node",
            }}
            data2={{
              src: "/works/drugcode/wireframe.png",
              caption: "Wireframes",
            }}
          />

          <figure className="mb-4">
            <Image
              src="/works/drugcode/drag.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>UI kit</figcaption>
          </figure>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/right_side.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>UI kit</figcaption>
          </figure>
          <ArticleImageSection
            data1={{
              src: "/works/drugcode/menu.png",
              caption: "Left menu. File manager",
            }}
            data2={{
              src: "/works/drugcode/viewer.png",
              caption: "Visual editor and preview window",
            }}
          />
        </Section>

        <Section id="havefun" className="mb-8 px-4 container">
          <Accordeon title="Have fun 😊" expanded={true} id="2">
            <p className="text-xl">
              We follow the pattern Template / Region / Component / Element and
              the modifier. A mix of atomic design principles and BEM
              methodology. More then 80 components are created.
            </p>
          </Accordeon>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/node.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>Node editor</figcaption>
          </figure>
        </Section>
      </Article>
    </AnimateLayout>
  );
}
