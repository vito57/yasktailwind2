import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleHeader,
  BodyImage,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Starc - IOS native App",
  description: "Script writing app for IOS",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-100">
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/cover.png"
              width={1120}
              height={416}
              //   className="bg-orange-100"
              alt="Domkino website"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>Design of an adaptive website for the Dom Kino TV channel</p>
          </Text>
        </Section>

        <Section id="mobile" className="container">
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/main.png"
              alt="DomKino website layout"
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/layout_1.png"
              alt="DomKino website layout"
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/layout_2.png"
              alt="DomKino website layout"
            />
          </ArticleFigure>
        </Section>

        <Section id="summary" className="container">
          <Text title="Summary">
            <p>
              Designer:{" "}
              <Link className="ylink" href="/vitaly">
                Vitaly
              </Link>{" "}
            </p>
            <p>
              Live:{" "}
              <Link className="ylink" href="https://www.domkino.tv/">
                domkino.tv
              </Link>{" "}
            </p>
            <p>Year: 2018 </p>
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
