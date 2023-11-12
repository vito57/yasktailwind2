import {
  Section,
  AnimateLayout,
  Article,
  Text,
  ArticleImageSection,
  ArticleFigure,
  BodyImage,
  ArticleHeader,
} from "../../components/server";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Flamingo",
  description: "Story about Drugcode design",
};
export default function Flamingo() {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-100">
          <ArticleFigure>
            <BodyImage
              src="/works/flamingo/cover.png"
              width={1120}
              height={416}
              alt="Flamingo cover"
            />
          </ArticleFigure>
        </ArticleHeader>

        <Section id="styles" className="mb-8 container">
          <Text title="About">
            <p className="mb-8">
              I worked with our team and developers to craft a style guide for
              superapp, which contains the library of common components used in
              the product and expands out to design principles for the design
              team to follow, as well as UX guidance on usage and implementation
              for every piece used in the product, from form elements to
              typography and entire screen configurations.
            </p>
            <p>
              The style guide was vital for both our developers and our
              designers, giving us a shared kit of parts to work from and
              ensures consistency within our designs. This framework was adopted
              by additional suites in the Power line and it used across multiple
              teams at the company today.
            </p>
          </Text>

          <ArticleFigure>
            <BodyImage src="/works/flamingo/overview.png" alt="Flamingo" />
          </ArticleFigure>
        </Section>
        {/* GUIDE */}
        <Section id="Guides" className="mb-8 container">
          <Text title="Process">
            <ol className="list-decimal list-inside">
              <li>Defining a goals and finding a problems</li>
              <li>
                Defining a principles (on principles based review process)
              </li>
              <li>
                Deep research of web and mobile specification(IOS Android Web)
              </li>
              <li>Research and define methodology(BEM, Atomic design, etc.)</li>
              <li>Make list of components</li>
              <li>Define extended color plate (for UI and content)</li>
              <li>Define theming tokens</li>
              <li>Make guidelines and components</li>
              <li>Make process of scaling, contributing and review</li>
            </ol>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/flamingo/principles.png"
              width={1120}
              height={600}
              alt="Flamingo"
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/flamingo/list_and_flow.png"
              width={1120}
              height={500}
              alt="Flamingo"
            />
          </ArticleFigure>
        </Section>
        {/* COMPONENTS */}
        <Section id="Components" className="mb-8 container">
          <Text title="Guides">
            <p>
              The Style Guide also served as a home for product design
              principles and general advice about typography, accessibility, and
              UX best practices. The Power BI design team was composed of
              designers who ranged from folks who had worked at Microsoft for
              decades, to young designers working on their first product team.
              The Style Guide was a way to help reach consensus on common
              paradigms and industry standards.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/flamingo/guides.png"
              width={1120}
              height={600}
              alt="Flamingo"
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/flamingo/components.png" alt="Flamingo" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/flamingo/components2.png" alt="Flamingo" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/flamingo/components3.png" alt="Flamingo" />
          </ArticleFigure>
        </Section>
        {/* WORKFOW */}
        <Section id="workflow" className="mb-8 container">
          <Text title="Examples">
            <p>
              In addition to documenting components and their usage, I crafted
              do/do not scenarios for many elements in the style guide, to help
              illustrate best practice and prevent easily avoided pratfalls. The
              Style Guide was both documentation and education.
            </p>
          </Text>
          <ArticleImageSection
            data1={{
              src: "/works/flamingo/u1.png",
              //caption: "Representing function as node",
            }}
            data2={{
              src: "/works/flamingo/u2.png",
              //caption: "Wireframes",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/flamingo/u3.png",
              //caption: "Representing function as node",
            }}
            data2={{
              src: "/works/flamingo/u4.png",
              //caption: "Wireframes",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/flamingo/u5.png",
              //caption: "Representing function as node",
            }}
            data2={{
              src: "/works/flamingo/u6.png",
              // caption: "Wireframes",
            }}
          />
        </Section>
      </Article>
    </AnimateLayout>
  );
}
