import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleHeader,
  BodyImage,
  Summary,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Poehali - Adaptive web site",
  description: "Website for TV channel",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-900">
          <ArticleFigure>
            <BodyImage
              src="/works/poehali/cover.png"
              width={1120}
              height={416}
              className="bg-transparent  w-full"
              alt="Poehali TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Adaptive web site for TV channel</p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/poehali/main.png" alt="Restevents main" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/poehali/2.png" alt="Poehali main" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/poehali/adaptive1.png" alt="Poehali main" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/poehali/adaptive2.png" alt="Poehali main" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/poehali/styles.png" alt="Poehali main" />
          </ArticleFigure>
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2019"
              client="PKVS"
              link="https://www.poehali.tv/"
            />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
