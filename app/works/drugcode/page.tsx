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

export const metadata = {
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode editor design",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-[#3A404B]">
          <ArticleFigure>
            <Image
              src="/works/drugcode/cover.png"
              width={2240}
              quality={100}
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
              src="/works/drugcode/node_editor.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
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
              src="/works/drugcode/code_editor.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
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
              src="/works/drugcode/file_system.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text>
            <p className="text-xl">
              Redesign of the existing editor, find new features, cteate design
              system.
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/node_preview.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
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
              className="bg-zinc-900"
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
              className="bg-zinc-900"
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
              src="/works/drugcode/layout.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              Left sidebar - navigation, top - states, right - props, bottom -
              status, preview - visual edit
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/letf_side_bar.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
              alt="Right sidebar"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              Collapsible left sidebar, represent file system, with drag and
              drop functionality. Feature - file can be parsed, and view any
              block inside a file.
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/right_side_bar.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
              alt="Right sidebar"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              The task is to display in an understandable form, props, CSS
              rules, states, etc. Do not invent new properties, but use the
              properties provided by the standard(w3c) or library (example
              D3.js)
            </p>
            <p className="text-xl">
              You can write CSS values in the fields in any format supported by
              the specification. CSS variables, SASS, LESS, etc. Autocomplete
              works according to specification too.
            </p>
          </Text>
          <ArticleFigure>
            <Image
              src="/works/drugcode/preview.png"
              width={1600}
              height={1200}
              className="bg-zinc-900"
              alt="Drugcode ui"
            ></Image>
          </ArticleFigure>
          <Text title="">
            <p className="text-xl">
              Visual editor and preview. Change colors, add or remove elements,
              drag, resize, etc.
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
        {/* HAVE FUN*/}
        <Section id="have_fun" className="mb-8 px-4 container">
          <Text title="Heve fun 😊">
            <p className="text-xl">Nice editor must have copilot)</p>
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
