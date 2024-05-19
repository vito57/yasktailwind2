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
  title: "Bootsy Icons - UI icon set for Bootstrap",
  description: "1700+ handcrafted ui icons",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleHeroSection
            underTitle="Bootsy Icons"
            buttonUrl="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set"
            subTitle="High-quality handcrafted icon set for websites, apps, social
                  networks, prints."
            title="1700+ High-Quality UI Vector Icons"
            credits="Designed by Gala • Distributed by UI8 • Released 2021"
          >
            <BodyImage
              src="/works/bootsy/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bootsy Icons"
            />
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Multiplatform interface icons set, based on Bootstrap</p>
          </Text>

          <ArticleImageSection
            data1={{ src: "/works/bootsy/1.png" }}
            data2={{
              src: "/works/bootsy/2.png",
            }}
          />
          <ArticleImageSection
            data1={{ src: "/works/bootsy/3.png" }}
            data2={{
              src: "/works/bootsy/4.png",
            }}
          />
          <ArticleImageSection
            data1={{ src: "/works/bootsy/5.png" }}
            data2={{
              src: "/works/bootsy/6.png",
            }}
          />

          <ArticleFigure>
            <BodyImage
              src="/works/bootsy/f1.png"
              width={2240}
              height={5333}
              alt="All Icons"
            />
          </ArticleFigure>
        </Section>
        <Section id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="gala"
              year="2022"
              client="Yask"
              link="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set"
            />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
