import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Summary
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
        <ArticleHeader className="bg-[url('/works/drugcode/bg.png')] bg-cover">
          <ArticleFigure>
            <BodyImage
              src="/works/drugcode/cover.png"
              width={1120}
              height={416}
              className="bg-transparen  w-full"
              alt="Drugcode cover"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>

              Drugcode allows users to use banking data and create usefull
              internal apps for the web and mobile platforms. As the Designer
              for Drugcode, I was responsible for branding, UI/UX and visual
              design for all parts of the product. If that sounds like a broad
              scope of responsibilities—it was! Our design team significantly
              improved collaboration between design and the other disciplines
              while I was there.
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
              Drugcode is a internal banking web platform for building web
              service, and a mobile apps. When I joined in February 2019, the
              web service was in its infancy, and the Desktop tool was in the
              process of being overhauled with more power features. My goals
              were to oversee the design development of the entire suite of
              products, to rebrand and redesign the product.
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

        <Section id="branding">
          <Text title="Branding">
            <p>
              When I joined in February 2019, the web service was in its
              infancy, and the Desktop tool was in the process of being
              overhauled with more power features. My goals were to oversee the
              design development of the entire suite of products, to rebrand and
              redesign the product.
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

        <Section id="ux" >
          <Text title="Style Guide">
            <p className="mb-8">
              I worked with our team and the Drugcode developers to craft a
              style guide, which contains the library of common components used
              in the product and expands out to design principles for the design
              team to follow, as well as UX guidance on usage and implementation
              for every piece used in the product, from form elements to
              typography and entire screen configurations.
            </p>
            <p>
              The style guide was vital for both our developers and our
              designers, giving us a shared kit of parts to work from and
              ensures consistency within our designs.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/drugcode/ui.png" alt="Drugcode ui" />
          </ArticleFigure>
          <Text title="">
            <p>
              We follow the pattern Template / Region / Component / Element / Modifier.
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
        <Section id="workflow">
          <Text title="Workflow">
            <ol className=" list-decimal list-inside">
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
        {/* HAVE FUN */}
        <Section id="summary">
          <Text title="Summary">
          <Summary designer="vitaly" year="2020-2021" client="Sber"/>

           
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
