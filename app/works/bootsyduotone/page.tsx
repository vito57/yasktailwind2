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
              className="bg-transparent"
              alt="Bootsy duotone icons"
            />

            {/* <figcaption className="relative pb-8 md:pb-0 md:absolute  md:top-8 md:right-8 md:bottom-8 md:left-8 top-0 left-0  flex flex-col justify-center ">
              <div className="md:max-w-sm text-white">
                <p className="text-sm md:text-base mb-2  opacity-75">Bootsy Doutone Icons</p>
                <h1 className="text-xl md:text-4xl mb-2 font-bold ">
                  {" "}
                  1700+ High-Quality <br/> UI Vector Icons
                </h1>
                <p className="text-base  mb-4 opacity-75">
                  High-quality handcrafted icon set for websites, apps, social
                  networks, prints.
                </p>
                <Button className="ybutton secondary w-full md:w-auto" path="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set">Download on UI8</Button>
              </div>
            </figcaption> */}
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>Multiplatform interface icons set, based on Bootstrap</p>
          </Text>
        </Section>

        {/* BRANDING */}

        <Section id="about" className="mb-2 px-4 container">
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

        <Section className="container">
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
            <p>
              Download:{" "}
              <Link className="ylink" href="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set">UI8</Link>
            </p>
            <p>Year: 2022 </p>
          </Text>

        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
