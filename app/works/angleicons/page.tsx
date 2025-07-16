import {
  Article,
  AnimateLayout,
  Text,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Summary,
  ArticleFigure,
  ArticleHeroSection,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "AngleIcons - Bootstrap Based Icon System",
  description: "2400 handcrafted ui icons",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-stone-100">
          <ArticleHeroSection
            underTitle="2400 Unique Icons"
            buttonUrl="https://ui8.net/gala-yask/products/angleicons-ui-icon-set"
            subTitle="Handcrafted multi-purpose icon set for websites, apps, social networks, print and more."
            title="High-Quality Modern Vector UI Icons Set"
            credits="Designed by Gala • Distributed by UI8 • Released 2024"
            btnTxt="Purchase Set →"
          >
            <BodyImage
              src="/works/angleicons/cover.png"
              width={3200}
              height={1372}
              className="bg-transparent w-full"
              alt="Iconsaur"
            />
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              AngleIcons — multi-purpose icon set. Bright and original icons for
              the user interface. The icon library consists of 2400+ unique ui
              icons, divided by 40 groups. Figma file well organised and ready
              for work. Svg and png file formats included. AngleIcons is a good
              choice for Bootstrap or Tailwind users. All icon names, are the
              same as Bootstrap icons. Makes your website or app look different.
            </p>
          </Text>
          <br />
          <ArticleImageSection
            className="bg-stone-100"
            image1={{
              src: "/works/angleicons/communication.png",
            }}
            image2={{
              src: "/works/angleicons/files.png",
            }}
          />
          <br />
          <ArticleImageSection
            className="bg-stone-100"
            image1={{
              src: "/works/angleicons/ui.png",
            }}
            image2={{
              src: "/works/angleicons/brands.png",
            }}
          />
          <br />
          <ArticleImageSection
            className="bg-stone-100"
            image1={{
              src: "/works/angleicons/transport.png",
            }}
            image2={{
              src: "/works/angleicons/world.png",
            }}
          />
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/angleicons/lined_title.png"
              alt="lined and filled"
              className="bg-stone-100"
              width={3200}
              height={640}
            />
          </ArticleFigure>
          <br />
          <ArticleImageSection
            className="bg-stone-100"
            image1={{
              src: "/works/angleicons/lined.png",
            }}
            image2={{
              src: "/works/angleicons/filled.png",
            }}
          />
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/angleicons/makes_title.png"
              alt="makes your design different"
              className="bg-stone-100"
              width={3200}
              height={640}
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/angleicons/preview.png"
              alt="lined and filled"
              width={3600}
              height={2400}
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/angleicons/2400_title.png"
              alt="2400 unique icons"
              className="bg-stone-100"
              width={3200}
              height={640}
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              className="bg-stone-100"
              src="/works/angleicons/2400.png"
            />
          </ArticleFigure>
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="gala" year="2024" client="UI8" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
