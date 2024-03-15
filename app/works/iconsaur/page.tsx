import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Button,
  ArticleHeroSection
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
        <ArticleHeader >
        <ArticleHeroSection underTitle="Iconsaur" 
          buttonUrl="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set"
          subTitle="High-quality handcrafted icon set for websites, apps, social
                  networks, prints." 
                  title="2400 High-Quality UI Vector Icons">
            <BodyImage
              src="/works/iconsaur/cover.png"
              width={1120}
              height={416}
              className="bg-transparent"
              alt="Iconsaur"
            /></ArticleHeroSection>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Iconsaur - multi-purpose icon system. These are bright and
              original icons for the user interface. Iconsaur is a good choise for
              Bootstrap or Tailwind users. All icon names are the same as
              Boostraps icon names. Makes your website or app look different.
            </p>
          </Text>
        </Section>

        {/* BRANDING */}

        <Section className="container">
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
        <BodyImage
              src="/works/iconsaur/preview1.png"
              width={1120}
              alt="Iconsaur preview"
            />
                    <BodyImage
              src="/works/iconsaur/preview.png"
              width={1120}
              alt="Iconsaur preview"
            />
 
        </Section>
        <Section id="summary" className="container">
          <Text title="Summary">
            <p>
              Designer:{" "}
              <Link className="ylink" href="/gala">
                Gala
              </Link>{" "}
            </p>
            <p>
              Helper:{" "}
              <Link className="ylink" href="/vitaly">
                Vitaly
              </Link>{" "}
            </p>
            <p>Year: 2024 </p>
          </Text>

        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
