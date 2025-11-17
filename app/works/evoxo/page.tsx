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
  VideoSkeleton,
} from "../../components/server";

export const metadata = {
  title: "Evoxo",
  description: "Payment sevice. Landing page design",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-ylightgrey">
          <ArticleFigure>
            <BodyImage
              src="/works/evoxo/cover.png"
              width={1120}
              height={416}
              className="w-full"
              alt="Evoxo"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Logo and web design for payment service</p>
          </Text>

          <br />
          <ArticleImageSection
            className="bg-ylightgrey"
            image1={{
              src: "/works/evoxo/logo.png",
              caption: "[fig 1] Logo",
            }}
            image2={{
              src: "/works/evoxo/bento.png",
              caption: "[fig 2] Style",
            }}
          />
          <br />
          {/* <ArticleImageSection
            height={954}
            className="bg-zinc-900"
            image1={{
              src: "/works/evoxo/desktop.png",
              caption: "[fig 3] Desktop",
            }}
            image2={{
              src: "/works/evoxo/mobile.png",
              caption: "[fig 4] Mobile",
            }}
          /> */}
          <ArticleFigure figcaption="[fig 3] Desktop">
            <BodyImage
              src="/works/evoxo/desktop.png"
              className="bg-ylightgrey"
              alt="[fig 3] Desktop"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure figcaption="[fig 4] Mobile">
            <BodyImage
              src="/works/evoxo/mobile.png"
              className="bg-ylightgrey"
              alt="[fig 4] Mobile"
            />
          </ArticleFigure>
        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="vitaly" year="2025" client="Evoxo" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
