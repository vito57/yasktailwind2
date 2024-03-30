import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleHeader,
  ArticleImageSection,
  BodyImage,
  Summary
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "DomKino",
  description: "Adaptive website for TV",
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

        <Section id="about">
          <Text title="About">
            <p>Design of an adaptive website for the Dom Kino TV channel</p>
          </Text>



          <ArticleFigure >
            <BodyImage
              src="/works/domkino/layout_1.png"
              alt="DomKino website layout"
            />
          </ArticleFigure>
          <Text title="">
            <p>When designing a layout, it was necessary to provide as many advertising places as possible and dont forget about users. I prepared different options for layouts with an adaptive and tested them.</p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/layout_2.png"
              alt="DomKino website layout"
              height={1354}
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/layout_3.png"
              alt="DomKino website article"
            />
          </ArticleFigure>
          <Text title="">
            <p>Regular and rich article(with image header) templates. </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/article_image.png"
              alt="DomKino website article"
            />
          </ArticleFigure>

          <ArticleFigure>
            <BodyImage
              src="/works/domkino/article.png"
              alt="DomKino website article"
            />
          </ArticleFigure>
          <Text title="Styles">
            <p>All elements provided in style guide.</p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/domkino/styles.png"
              alt="DomKino website styles"
            />
          </ArticleFigure>
          <ArticleImageSection
            data1={{
              src: "/works/domkino/1.png",
            }}
            data2={{
              src: "/works/domkino/2.png",
            }}
          />

          <ArticleImageSection
            data1={{
              src: "/works/domkino/5.png",
            }}
            data2={{
              src: "/works/domkino/6.png",
            }}
          />
        </Section>

        <Section id="summary">
          <Text title="Summary">
          <Summary designer="vitaly" year="2018" client="PKVS" link="https://www.domkino.tv/"/>

           
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
