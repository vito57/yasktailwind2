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
            <p>
              Adaptive website for the channel of Soviet films about the Second
              World War
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="New main page">
            <BodyImage src="/works/pobeda/main.png" alt="Pobeda main" />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="Articles">
            <BodyImage src="/works/pobeda/articles.png" alt="Pobeda articles" />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="Article">
            <BodyImage src="/works/pobeda/article.png" alt="Article" />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="Schedule">
            <BodyImage src="/works/pobeda/schedule.png" alt="Schedule" />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="Mobile adoptation">
            <BodyImage src="/works/pobeda/mobile.png" alt="Bober main" />
          </ArticleFigure>
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="vitaly" year="2014" client="PKVS" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
