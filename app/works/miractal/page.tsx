import type { Metadata } from "next";
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
  VideoSkeleton,
} from "../../components/server";

export const metadata: Metadata = {
  title: "Mira",
  description: "Mira. Landing page design",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-black">
          <ArticleFigure>
            <BodyImage
              src="/works/miractal/cover.png"
              width={1120}
              height={416}
              className="w-full"
              alt="Evoxo"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Web design for Mira</p>
          </Text>

          <br />
          <ArticleImageSection
            className="bg-zinc-900"
            image1={{
              src: "/works/miractal/desktop1.png",
              caption: "[fig 1] Main",
            }}
            image2={{
              src: "/works/miractal/desktop2.png",
              caption: "[fig 2] Inner page",
            }}
          />
          <br />
          <ArticleImageSection
            height={954}
            className="bg-zinc-900"
            image1={{
              src: "/works/miractal/desktop3.png",
              caption: "[fig 3] Inner page",
            }}
            image2={{
              src: "/works/miractal/mobile.png",
              caption: "[fig 4] Mobile",
            }}
          />



        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="vitaly" year="2025" client="Mira" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
