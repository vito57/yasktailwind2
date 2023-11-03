import {
  Section,
  AnimateLayout,
  Article,
  Text,
  ArticleImageSection,
  ArticleFigure,
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
        <header
          id="intro"
          className="mb-8 pt-[128px] bg-[#F3F3F9] reletive mt-[-128px] "
        >
          <div className="container px-4">
            <Image
              src="/works/flamingo/flamingo-cover2.png"
              width={2000}
              height={416}
              className="w-full mb-8 rounded"
              alt="Drugcode"
            />
          </div>
        </header>

        <Section id="styles" className="mb-8 px-4 relative container">
          <Text title="About">
            <p className="text-xl">
              Design Sysytem for IOS, Android and adaptive web
            </p>
          </Text>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/styles.png"
              width={2400}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
            {/* <figcaption>Code editor</figcaption> */}
          </figure>
        </Section>
        {/* GUIDE */}
        <Section id="Guides" className="mb-8 px-4 relative container">
          <Text title="Guides">
            <p className="text-xl">
              My role: UI/UX designer Task: redesign of the existing editor,
              find new features, cteate design system
            </p>
          </Text>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/guides.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
            <figcaption>Code editor</figcaption>
          </figure>
        </Section>
        {/* COMPONENTS */}
        <Section id="Guides" className="mb-8 px-4 relative container">
          <Text title="Guides">
            <p className="text-xl">
              My role: UI/UX designer Task: redesign of the existing editor,
              find new features, cteate design system
            </p>
          </Text>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/components.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
          </figure>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/components2.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
          </figure>
          <figure className="mb-4">
            <Image
              src="/works/flamingo/components3.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Flamingo styles"
            ></Image>
          </figure>
        </Section>
        {/* WORKFOW */}
        <Section id="workflow" className="mb-8 px-4 container">
          <Text title="Examples">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium nobis molestiae neque commodi alias obcaecati nam unde
              tempore reprehenderit quisquam explicabo possimus ea facere
              debitis enim labore, eos quidem ab.
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
