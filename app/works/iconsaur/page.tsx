import {
  Article,
  AnimateLayout,
  Text,
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
  title: "Iconsaur - Bootstrap Based Icon System",
  description: "2400 handcrafted ui icons",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-100">
          <ArticleHeroSection
            underTitle="Iconsaur"
            buttonUrl="https://ui8.net/gala-yask/products/iconsaur---bootstrap-icon-system"
            subTitle="High-quality handcrafted icon set for websites, apps, social
                  networks, prints."
            title="2400 High-Quality UI Vector Icons"
            btnTxt="Download on UI8"
          >
            <BodyImage
              src="/works/iconsaur/cover.png"
              width={1120}
              height={416}
              className="bg-transparent  w-full"
              alt="Iconsaur"
            />
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Iconsaur - multi-purpose icon system. These are bright and
              original icons for the user interface. Iconsaur is a good choise
              for Bootstrap or Tailwind users. All icon names are the same as
              Boostraps icon names. Makes your website or app look different.
            </p>
          </Text>
  
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/1.png",
            }}
            data2={{
              src: "/works/iconsaur/2.png",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/3.png",
            }}
            data2={{
              src: "/works/iconsaur/4.png",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/5.png",
            }}
            data2={{
              src: "/works/iconsaur/6.png",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/7.png",
            }}
            data2={{
              src: "/works/iconsaur/8.png",
            }}
          />
        </Section>
        <Section className="container">
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/iconsaur_preview_1.png",
            }}
            data2={{
              src: "/works/iconsaur/iconsaur_preview_2.png",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/iconsaur_preview_3.png",
            }}
            data2={{
              src: "/works/iconsaur/iconsaur_preview_4.png",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/iconsaur/iconsaur_preview_5.png",
            }}
            data2={{
              src: "/works/iconsaur/iconsaur_preview_6.png",
            }}
          />
        </Section>
        <Section id="summary" className="container">
     
          <Text title="Summary">
          <Summary designer="gala" year="2024" client="UI8" link="https://ui8.net/gala-yask/products/iconsaur---bootstrap-icon-system"/>

          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
