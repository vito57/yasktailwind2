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
  ArticleHeroSection,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode editor design",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-900">
          <ArticleHeroSection
            underTitle="Bootsy Doutone Icons"
            title="1700+ High-Quality UI Vector Icons"
            subTitle="High-quality handcrafted icon set for websites, apps, social
          networks, prints."
            credits="Designed by Gala • Distributed by UI8 • Released 2021"
            buttonUrl="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set"
          >
            <BodyImage
              src="/works/bootsyduotone/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bootsy duotone icons"
            />
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Multiplatform interface icons set, based on Bootstrap</p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bootsyduotone/1.jpeg" }}
            image2={{
              src: "/works/bootsyduotone/2.jpeg",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bootsyduotone/3.jpeg" }}
            image2={{
              src: "/works/bootsyduotone/4.jpeg",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{ src: "/works/bootsyduotone/6.jpeg" }}
            image2={{
              src: "/works/bootsyduotone/5.jpeg",
            }}
          />
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/bootsy/f1.png"
              width={2240}
              height={5333}
              alt="All Icons"
            />
          </ArticleFigure>
        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="gala"
              year="2022"
              client="Yask"
              link="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set"
            />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
