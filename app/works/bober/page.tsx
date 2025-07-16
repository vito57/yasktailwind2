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
  title: "Bober - Adaptive web site",
  description: "Website for TV channel",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-100">
          <ArticleFigure>
            <BodyImage
              src="/works/bober/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bober TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Adaptive web site and logo for TV channel</p>
          </Text>
          <br />
          <ArticleFigure figcaption="New main page layout">
            <BodyImage src="/works/bober/main.png" alt="Bober main" />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="Alternative main and article page">
            <BodyImage src="/works/bober/main2.png" alt="Bober main" />
          </ArticleFigure>
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bober/3.png" }}
            image2={{
              src: "/works/bober/logo.png",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bober/1.png" }}
            image2={{
              src: "/works/bober/3.png",
            }}
          />
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2019"
              client="PKVS"
              link="https://bober.ru"
            />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
