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
        <ArticleHeader className="bg-[url('/works/bober/bg.png')] bg-cover">
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
        <Section id="about" >
          <Text title="About">
            <p>Adaptive web site and logo for TV channel</p>
          </Text>


          <ArticleFigure figcaption="New main page layout">
            <BodyImage src="/works/bober/main.png" alt="Bober main" />
          </ArticleFigure>
          <ArticleFigure figcaption="New logo">
            <BodyImage
              src="/works/bober/logo.png"
              alt="Bober logo"
              width={2240}
              height={974}
            />
          </ArticleFigure>
          <ArticleFigure figcaption="Main page">
            <BodyImage src="/works/bober/3.png" alt="Bober main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/bober/1.png" alt="Bober main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/bober/2.png" alt="Bober main" />
          </ArticleFigure>
        </Section>

        <Section id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2019" client="PKVS" link="https://bober.ru"/>
         
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
