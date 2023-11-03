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
        <ArticleHeader className="bg-indigo-950">
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/cover.png"
              width={1120}
              height={416}
              className="bg-indigo-950"
              alt="Drugcode cover"
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
            <BodyImage
              src="/works/drugcode/node_editor.png"
              alt="Node editor"
            />
          </ArticleFigure>
          <Text>
            <BodyText>
              The editor consists of 2 main modes: code editor and node editor.
              Visual editing is carried out in the preview window. Supports
              system theming (dark and light theme).
            </BodyText>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/code_editor.png"
              alt="Code editor"
            />
          </ArticleFigure>
          <Text title="">
            <BodyText>
              Code editor baced on Monaco editor with all features. Any code
              have 2 representation, as text and as node. Node functionality is
              useful for designer and management
            </BodyText>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/file_system.png"
              alt="File system"
            />
          </ArticleFigure>
          <Text>
            <BodyText>Add, delete, rename projects</BodyText>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/node_preview.png"
              alt="Node preview"
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/light_theme.png"
              alt="Light theme"
            />
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
            <BodyImage src="/works/drugcode/ui.png" alt="Drugcode ui" />
          </ArticleFigure>
          <Text title="">
            <BodyText>
              We follow the pattern Template/Region/Component/Element/Modifier.
              A mix of atomic design principles and BEM methodology. More then
              80 components are created.
            </BodyText>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/drugcode/style.png" alt="Drugcode styles" />
          </ArticleFigure>
          <Text title="">
            <BodyText>
              Understanding how material design works, help to prepare tokens
              for dark and light themes. The same structure in Figma and in Code
              halps to understand each other
            </BodyText>
          </Text>

          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/letf_side_bar.png"
              alt="Left sidebar"
            />
          </ArticleFigure>
          <Text title="">
            <BodyText>
              Collapsible left sidebar, represent file system, with drag and
              drop functionality. Feature - file can be parsed, and view any
              block inside a file.
            </BodyText>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/right_side_bar.png"
              alt="Right sidebar"
            />
          </ArticleFigure>
          <Text title="">
            <BodyText>
              The task is to display in an understandable form, props, CSS
              rules, states, etc. Do not invent new properties, but use the
              properties provided by the standard(w3c) or library (example
              D3.js) <br />
              You can write CSS values in the fields in any format supported by
              the specification. CSS variables, SASS, LESS, etc. Autocomplete
              works according to specification too.
            </BodyText>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/preview.png"
              alt="Drugcode preview"
            />
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
