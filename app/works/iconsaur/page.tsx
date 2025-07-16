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
  title: "Iconsaur - Bootstrap Based Icon System",
  description: "2400 handcrafted ui icons",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-[#A3E635]">
          <ArticleHeroSection
            underTitle="2400 Unique Icons"
            buttonUrl="https://ui8.net/gala-yask/products/iconsaur---bootstrap-icon-system"
            subTitle="Handcrafted multi-purpose icon set for websites, apps, social networks, print and more."
            title="High-Quality Modern Vector UI Icons Set"
            credits="Designed by Gala • Distributed by UI8 • Released 2024"
            btnTxt="Purchase Set →"
          >
            <BodyImage
              src="/works/iconsaur/cover.png"
              width={3360}
              height={1248}
              className="bg-transparent  w-full"
              alt="Iconsaur"
            />
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Iconsaur — multi-purpose icon set. Bright and original icons for
              the user interface. The icon library consists of 2400+ unique ui
              icons, divided by 40 groups. Figma file well organised and ready
              for work. Svg and png file formats included. Iconsaur is a good
              choice for Bootstrap or Tailwind users. All icon names, are the
              same as Bootstrap icons. Makes your website or app look different.
            </p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/iconsaur/1.png",
            }}
            image2={{
              src: "/works/iconsaur/2.png",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/iconsaur/3.png",
            }}
            image2={{
              src: "/works/iconsaur/4.png",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/iconsaur/5.png",
            }}
            image2={{
              src: "/works/iconsaur/6.png",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/iconsaur/7.png",
            }}
            image2={{
              src: "/works/iconsaur/8.png",
            }}
          />
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
