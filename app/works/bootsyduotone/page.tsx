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
        <ArticleHeader className="bg-[url('/works/bootsyduotone/bg.png')] bg-cover">
          <ArticleHeroSection
            underTitle="Bootsy Doutone Icons"
            title="1700+ High-Quality UI Vector Icons"
            subTitle="High-quality handcrafted icon set for websites, apps, social
          networks, prints."
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

          <ArticleImageSection
            data1={{ src: "/works/bootsyduotone/1.jpeg" }}
            data2={{
              src: "/works/bootsyduotone/2.jpeg",
            }}
          />
          <ArticleImageSection
            data1={{ src: "/works/bootsyduotone/3.jpeg" }}
            data2={{
              src: "/works/bootsyduotone/4.jpeg",
            }}
          />
          <ArticleImageSection
            data1={{ src: "/works/bootsyduotone/6.jpeg" }}
            data2={{
              src: "/works/bootsyduotone/5.jpeg",
            }}
          />
        </Section>

        <Section id="summary">
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
          <Summary designer="gala" year="2022" client="Yask" link="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set"/>

       
          </Text>

        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
