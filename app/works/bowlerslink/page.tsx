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
  title: "Bowlerslink - Adaptive web site for education platform",
  description: "Website for bowling platform",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleFigure>
            <BodyImage
              src="/works/bowlerslink/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bober TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Adaptive website and logo concept for bowling educational platform
            </p>
          </Text>
          <ArticleImageSection
            data1={{ src: "/works/bowlerslink/logo.png" }}
            data2={{ src: "/works/bowlerslink/cap.png" }}
          ></ArticleImageSection>
          <ArticleFigure>
            <BodyImage
              src="/works/bowlerslink/main.png"
              alt="BowlersLink main page"
            />
          </ArticleFigure>

          {/* <ArticleFigure figcaption="News section">
            <BodyImage src="/works/bowlerslink/news.png" alt="News" />
          </ArticleFigure> */}
          <ArticleFigure>
            <BodyImage src="/works/bowlerslink/mobile1.png" alt="Mobile" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/bowlerslink/mobile2.png" alt="Mobile" />
          </ArticleFigure>
        </Section>

        <Section id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" client="BlackSheep" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
