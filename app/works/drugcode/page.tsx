import { AnimateLayout } from "../../components/client";
import { Article, Text } from "../../components/server";
import { Section, ArticleImageSection } from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode design",
  themeColor: "dark",
};

export default function Drugcode() {
  return (
    <AnimateLayout>
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
          <Text title="About">
            <p className="text-xl">
              Redesign of the existing editor, find new features, cteate design
              system
            </p>
          </Text>
          <Text title="Workflow">
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
          </Text>
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
          <Text title="">
            <p className="text-xl">
              The editor consists of 2 main modes: code editor and node editor.
              Visual editing is carried out in the preview window. Supports
              system theming (dark and light theme).
            </p>
          </Text>
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
          <Text title="Workflow">
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
          </Text>
        </Section>
        {/* BRANDING */}

        <Section id="branding" className="mb-8 px-4 container">
          <Text title="Branding">
            <p className="text-xl">
              In the process of work, it became necessary to create a logo and
              style. Didn't take long, but got a lot done.
            </p>
          </Text>
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
          <Text title="UI/UX">
            <p className="text-xl">
              After basic research and creation of a proposal, We take out the
              styles, making a templates and prepare the specification.{" "}
              <Link href="" className="text-ylightblue">
                Material design
              </Link>{" "}
              is taken as the basis.
            </p>
          </Text>
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

          <Text title="">
            <p className="text-xl">
              We follow the pattern Template / Region / Component / Element and
              the modifier. A mix of atomic design principles and BEM
              methodology. More then 80 components are created.
            </p>
          </Text>
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
            <figcaption>Drag n drop</figcaption>
          </figure>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/right_side.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
            <figcaption>Right sidebar</figcaption>
          </figure>
          <Text title="">
            <p className="text-xl">
              You can write CSS values in the fields in any format supported by
              the specification. CSS variables, SASS, LESS, etc. Autocomplete
              works according to specification too.
            </p>
          </Text>
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
          <Text title="Have fun 😊">
            <p className="text-xl">
              We follow the pattern Template / Region / Component / Element and
              the modifier. A mix of atomic design principles and BEM
              methodology. More then 80 components are created.
            </p>
          </Text>
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
