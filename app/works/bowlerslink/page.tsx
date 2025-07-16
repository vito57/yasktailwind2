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
        {/* <Section>
          <h1 className="text-2xl text-center text-white py-6">We are working on the presentation. It will appear soon</h1>
        </Section> */}
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
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bowlerslink/logo.png" }}
            image2={{ src: "/works/bowlerslink/cap.png" }}
          ></ArticleImageSection>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/bowlerslink/main.png"
              alt="BowlersLink main page"
            />
          </ArticleFigure>
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bowlerslink/mobile1.png" }}
            image2={{ src: "/works/bowlerslink/mobile2.png" }}
          ></ArticleImageSection>
        </Section>

        <aside id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" client="BlackSheep" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
