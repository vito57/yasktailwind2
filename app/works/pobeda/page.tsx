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
  title: "Pobeda - Adaptive web site",
  description: "Website for TV channel",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleFigure>
            <BodyImage
              src="/works/pobeda/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Pobeda TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Adaptive web site for TV channel</p>
          </Text>

          <ArticleFigure figcaption="New main page">
            <BodyImage src="/works/pobeda/main.png" alt="Pobeda main" />
          </ArticleFigure>
          <ArticleFigure figcaption="Articles">
            <BodyImage src="/works/pobeda/articles.png" alt="Pobeda articles" />
          </ArticleFigure>

          <ArticleFigure figcaption="Article">
            <BodyImage src="/works/pobeda/article.png" alt="Article" />
          </ArticleFigure>
          <ArticleFigure figcaption="Schedule">
            <BodyImage src="/works/pobeda/schedule.png" alt="Schedule" />
          </ArticleFigure>
          <ArticleFigure figcaption="Mobile adoptation">
            <BodyImage src="/works/pobeda/mobile.png" alt="Bober main" />
          </ArticleFigure>
        </Section>

        <Section id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2015" client="PKVS" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
