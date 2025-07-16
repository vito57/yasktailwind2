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
  title: "Darlen App - shoping mobile app",
  description: "Shoping mobile app",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleFigure>
            <BodyImage
              src="/works/darlen/cover.png"
              width={1120}
              height={416}
              alt="Darlen app"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Darlen-Fashion Platform for the presentation of unique brands.
              Change the product in the case in the application section!
            </p>
          </Text>

          <ArticleFigure>
            <BodyImage src="/works/darlen/1.png" alt="Darlen" />
          </ArticleFigure>

          <ArticleFigure>
            <BodyImage src="/works/darlen/2.png" alt="Darlen" />
          </ArticleFigure>

          <ArticleFigure>
            <BodyImage src="/works/darlen/3.png" alt="Darlen" />
          </ArticleFigure>
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2019"
              client="BlackSheep"
              link="https://apps.apple.com/ru/app/darlen/id1524331706"
            />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
