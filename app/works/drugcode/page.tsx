import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode editor design",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleFigure>
            <Image
              src="/works/drugcode/cover.png"
              width={2240}
              height={832}
              className="w-full mb-8 rounded"
              alt="Drugcode"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p className="text-xl">
              Redesign of the existing editor, find new features, cteate design
              system.
            </p>
          </Text>

          <ArticleFigure>
            <Image
              src="/works/drugcode/code.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              Code editor baced on Monaco editor with all features. Any code
              have 2 representation, as text and as node. Node functionality is
              useful for designer and management
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/node-editor.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              The editor consists of 2 main modes: code editor and node editor.
              Visual editing is carried out in the preview window. Supports
              system theming (dark and light theme).
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/node.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <ArticleFigure>
            <Image
              src="/works/drugcode/viewer.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <ArticleFigure>
            <Image
              src="/works/drugcode/overview.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
        </Section>

        {/* BRANDING */}

        <Section id="branding" className="mb-8 px-4 container">
          <Text title="Branding">
            <p className="text-xl">
              The brand allows you to increase consistency and improve external
              communication.
            </p>
          </Text>
          <ArticleImageSection
            data1={{ src: "/works/drugcode/brand.png" }}
            data2={{
              src: "/works/drugcode/brand-guide.png",
            }}
          />
        </Section>
        {/* UI/UX */}
        <Section id="ux" className="mb-8 px-4 container">
          <Text title="UI/UX">
            <p className="text-xl">
              After basic research and creation of a proposal, We take out the
              styles, making a templates and prepare the specification. Material
              design is taken as the basis.
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/ui.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              We follow the pattern Template/Region/Component/Element/Modifier.
              A mix of atomic design principles and BEM methodology. More then
              80 components are created.
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/style.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              Understanding how material design works, help to prepare tokens
              for dark and light themes. The same structure in Figma and in Code
              halps to understand each other
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/structure.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>

          <ArticleFigure>
            <Image
              src="/works/drugcode/layout.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <ArticleFigure>
            <Image
              src="/works/drugcode/right_side.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Right sidebar"
            ></Image>
          </ArticleFigure>
          <ArticleFigure>
            <Image
              src="/works/drugcode/menu.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Right sidebar"
            ></Image>
          </ArticleFigure>
          <ArticleFigure>
            <Image
              src="/works/drugcode/preview.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <ArticleFigure>
            <Image
              src="/works/drugcode/node_func.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Functions as nodes"
            ></Image>
          </ArticleFigure>

          <Text title="">
            <p className="text-xl">
              You can write CSS values in the fields in any format supported by
              the specification. CSS variables, SASS, LESS, etc. Autocomplete
              works according to specification too.
            </p>
          </Text>
        </Section>
        {/* HAVE FUN SECTION */}
        <Section id="have_fun" className="mb-8 px-4 container">
          <Text title="Heve some fun">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, incidunt! Molestias dolorum quo impedit ipsam
              deleniti ut praesentium delectus placeat? Cum a porro error
              eveniet nesciunt, aut vel quos vero.
            </p>
          </Text>
        </Section>
        {/* WORKFOW */}
        <Section id="workflow" className="mb-8 px-4 container">
          <Text title="Workflow">
            <ol className="text-xl list-decimal list-inside">
              <li>
                Baseline research (Interview, Interview in context,
                observations)
              </li>
              <li>Making a proposal of new features and improvements</li>
              <li>Prototyping</li>
              <li>Creating design and specification</li>
              <li>Field supervision</li>
            </ol>
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
