import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Summary,
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
        <ArticleHeader className="bg-zinc-900">
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
          <br />
          <ArticleFigure figcaption="[fig1] Node editor">
            <BodyImage
              src="/works/drugcode/node_editor.png"
              alt="Node editor"
              className="bg-[url('/works/drugcode/bg.png')] bg-cover"
            />
          </ArticleFigure>
          <br />
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
          <br />
          <ArticleFigure figcaption="[fig 2] Code editor">
            <BodyImage
              src="/works/drugcode/code_editor.png"
              alt="Code editor"
              className="bg-[url('/works/drugcode/bg.png')] bg-cover"
            />
          </ArticleFigure>
          <br />
          <Text title="">
            <p>
              Code editor baced on Monaco editor with all features. Any code
              have 2 representation, as text and as node. Node functionality is
              useful for designer and management
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="[fig 3] File system">
            <BodyImage
              src="/works/drugcode/file_system.png"
              alt="File system"
              className="bg-[url('/works/drugcode/bg.png')] bg-cover"
            />
          </ArticleFigure>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/drugcode/node_preview.png",
              caption: "[fig 4] Node preview",
            }}
            image2={{
              src: "/works/drugcode/light_theme.png",
              caption: "[fig 5] Light theme",
            }}
            className="bg-[url('/works/drugcode/bg.png')] bg-cover"
          />
          <br />
          <Text title="Branding">
            <p>
              When I joined in February 2019, the web service was in its
              infancy, and the Desktop tool was in the process of being
              overhauled with more power features. My goals were to oversee the
              design development of the entire suite of products, to rebrand and
              redesign the product.
            </p>
          </Text>
          <br />
          <ArticleImageSection
            className="bg-zinc-900"
            image1={{ src: "/works/drugcode/brand.png", caption: "[fig 6]" }}
            image2={{
              src: "/works/drugcode/brand-guide.png",
              caption: "[fig 7]",
            }}
          />
          <br />
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
          <br />
          <ArticleFigure figcaption="[fig 8] Default system">
            <BodyImage
              src="/works/drugcode/ui.png"
              className="bg-zinc-900"
              alt="Drugcode ui"
            />
          </ArticleFigure>
          <br />
          <Text title="">
            <p>
              We follow the pattern Template / Region / Component / Element /
              Modifier. A mix of atomic design principles and BEM methodology.
              More then 80 components are created.
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="[fig 9] Drugcode styles">
            <BodyImage
              src="/works/drugcode/style.png"
              className="bg-zinc-900"
              alt="Drugcode styles"
            />
          </ArticleFigure>
          <br />
          <Text title="">
            <p>
              Understanding how material design works, help to prepare tokens
              for dark and light themes. The same structure in Figma and in Code
              halps to understand each other
            </p>
          </Text>
          <br />
          <ArticleImageSection
            className="bg-zinc-900"
            image1={{
              src: "/works/drugcode/letf_side_bar.png",
              caption: "[fig 10] Left sidebar",
            }}
            image2={{
              src: "/works/drugcode/drag.png",
              caption: "[fig 11] Drug n Drop",
            }}
          />
          <br />

          <Text title="">
            <p>
              Collapsible left sidebar, represent file system, with drag and
              drop functionality. Feature - file can be parsed, and view any
              block inside a file.
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="[fig 12] Right sidebar">
            <BodyImage
              className="bg-zinc-900"
              src="/works/drugcode/right_side_bar.png"
              alt="Right sidebar"
            />
          </ArticleFigure>
          <br />
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
          <br />
          <ArticleFigure figcaption="[fig 13]">
            <BodyImage
              className="bg-zinc-900"
              src="/works/drugcode/preview.png"
              alt="Drugcode preview"
            />
          </ArticleFigure>
          <br />
          <Text title="">
            <p>
              Visual editor and preview. Change colors, add or remove elements,
              drag, resize, etc.
            </p>
          </Text>
          <br />
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
          <br />
          <Text title="Summary">
            <Summary designer="vitaly" year="2021" client="Sber" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
