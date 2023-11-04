import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
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
        <ArticleHeader className="bg-indigo-900">
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/cover.png"
              width={1120}
              height={416}
              className="bg-indigo-900"
              alt="Drugcode cover"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Node and code editor design, based on standards. Finding new
              features. Create design system. Brand design.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/node_editor.png"
              alt="Node editor"
            />
          </ArticleFigure>
          <Text>
            <p>
              The editor consists of 2 main modes: code editor and node editor.
              Visual editing is carried out in the preview window. Supports
              system theming (dark and light theme).
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/code_editor.png"
              alt="Code editor"
            />
          </ArticleFigure>
          <Text title="">
            <p>
              Code editor baced on Monaco editor with all features. Any code
              have 2 representation, as text and as node. Node functionality is
              useful for designer and management
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/file_system.png"
              alt="File system"
            />
          </ArticleFigure>
          <Text>
            <p>Add, delete, rename projects</p>
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
            <p>
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
            <p>
              After basic research and creation of a proposal, We take out the
              styles, making a templates and prepare the specification. Material
              design is taken as the basis.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/drugcode/ui.png" alt="Drugcode ui" />
          </ArticleFigure>
          <Text title="">
            <p>
              We follow the pattern Template/Region/Component/Element/Modifier.
              A mix of atomic design principles and BEM methodology. More then
              80 components are created.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/drugcode/style.png" alt="Drugcode styles" />
          </ArticleFigure>
          <Text title="">
            <p>
              Understanding how material design works, help to prepare tokens
              for dark and light themes. The same structure in Figma and in Code
              halps to understand each other
            </p>
          </Text>

          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/letf_side_bar.png"
              alt="Left sidebar"
            />
          </ArticleFigure>
          <Text title="">
            <p>
              Collapsible left sidebar, represent file system, with drag and
              drop functionality. Feature - file can be parsed, and view any
              block inside a file.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/right_side_bar.png"
              alt="Right sidebar"
            />
          </ArticleFigure>
          <Text title="">
            <p>
              The task is to display in an understandable form, props, CSS
              rules, states, etc. Do not invent new properties, but use the
              properties provided by the standard(w3c) or library (example
              D3.js) <br />
              You can write CSS values in the fields in any format supported by
              the specification. CSS variables, SASS, LESS, etc. Autocomplete
              works according to specification too.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/preview.png"
              alt="Drugcode preview"
            />
          </ArticleFigure>
          <Text title="">
            <p>
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
        {/* HAVE FUN
        <Section id="have_fun" className="mb-8 px-4 container">
          <Text title="Heve fun 😊">
            <p>Nice editor must have copilot)</p>
          </Text>
        </Section> */}
      </Article>
    </AnimateLayout>
  );
};

export default Page;
