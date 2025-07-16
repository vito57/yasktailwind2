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
  title: "Taytega - Adaptive web site and logo design for engineering company",
  description: "Website and logo for engineering company",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleFigure>
            <BodyImage
              src="/works/taytega/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Taytega"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Adaptive website and logo design for engineering company Taytega
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="[fig 1] Branding">
            <BodyImage
              src="/works/taytega/taytega-logo.png"
              alt="Taytega logo"
              className="bg-stone-900"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="[fig 2] Logo">
            <BodyImage
              src="/works/taytega/taytega-logo-2.png"
              alt="Taytega logo"
              className="bg-stone-900"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="[fig 3] Main and inner page">
            <BodyImage
              src="/works/taytega/taytega1.png"
              alt="Main and inner page"
              className="bg-stone-900"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="[fig 4] Inner pages">
            <BodyImage
              src="/works/taytega/taytega2.png"
              className="bg-stone-900"
              alt="Inner pages"
            />
          </ArticleFigure>
          <br />
          <ArticleImageSection
            className="bg-stone-900"
            image1={{
              src: "/works/taytega/taytega3.png",
              caption: "[fig 5] Inner pages",
            }}
            image2={{
              src: "/works/taytega/taytega4.png",
              caption: "[fig 6] Inner pages",
            }}
          ></ArticleImageSection>
          <br />

          <ArticleFigure figcaption="[fig 7] Overview">
            <BodyImage
              src="/works/taytega/taytega5.png"
              className="bg-stone-900"
              alt="Work overview"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="[fig 8] Mobile">
            <BodyImage
              className="bg-stone-900"
              src="/works/taytega/taytega7.png"
              alt="Mobile design"
            />
          </ArticleFigure>
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2024"
              link={"https://taytega.ru/"}
              client="BlackSheep"
            />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
