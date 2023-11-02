import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyText,
  BodyImage,
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
        <ArticleHeader className="bg-[#222225]">
          <ArticleFigure>
            <Image
              src="/works/drugcode/cover.png"
              width={1600}
              height={1200}
              alt="dssd"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <BodyText>
              Redesign of the existing editor, find new features, cteate design
              system.
            </BodyText>
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
            <BodyText>
              The editor consists of 2 main modes: code editor and node editor.
              Visual editing is carried out in the preview window. Supports
              system theming (dark and light theme).
            </BodyText>
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
            <BodyText>
              Code editor baced on Monaco editor with all features. Any code
              have 2 representation, as text and as node. Node functionality is
              useful for designer and management
            </BodyText>
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
            <BodyText>
              Redesign of the existing editor, find new features, cteate design
              system.
            </BodyText>
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
            <BodyText>
              The brand allows you to increase consistency and improve external
              communication.
            </BodyText>
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
            <BodyText>
              After basic research and creation of a proposal, We take out the
              styles, making a templates and prepare the specification. Material
              design is taken as the basis.
            </BodyText>
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
            <BodyText>
              We follow the pattern Template/Region/Component/Element/Modifier.
              A mix of atomic design principles and BEM methodology. More then
              80 components are created.
            </BodyText>
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
            <BodyText>
              Understanding how material design works, help to prepare tokens
              for dark and light themes. The same structure in Figma and in Code
              halps to understand each other
            </BodyText>
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
            <BodyText>
              Left sidebar - navigation, top - states, right - props, bottom -
              status, preview - visual edit
            </BodyText>
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
            <BodyText>
              Collapsible left sidebar, represent file system, with drag and
              drop functionality. Feature - file can be parsed, and view any
              block inside a file.
            </BodyText>
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
            <BodyText>
              The task is to display in an understandable form, props, CSS
              rules, states, etc. Do not invent new properties, but use the
              properties provided by the standard(w3c) or library (example
              D3.js)
            </BodyText>
            <BodyText>
              You can write CSS values in the fields in any format supported by
              the specification. CSS variables, SASS, LESS, etc. Autocomplete
              works according to specification too.
            </BodyText>
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
            <BodyText>
              Visual editor and preview. Change colors, add or remove elements,
              drag, resize, etc.
            </BodyText>
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
            <BodyText>Nice editor must have copilot)</BodyText>
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
