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
  title: "Bootsy Icons - UI icon set for Bootstrap",
  description: "1700+ handcrafted ui icons",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-[url('/works/bootsy/bg.png')] bg-cover">

          <ArticleHeroSection>
            <BodyImage
              src="/works/bootsy/cover.png"
              width={1120}
              height={416}
              className="bg-transparent"
              alt="Bootsy Icons"
            />

            <figcaption className="absolute  md:top-8 md:right-8 md:bottom-8 md:left-8 top-0 left-0 right-0 bottom-0 flex flex-col justify-center ">
              <div className="max-w-sm text-white">
                <p className="text-sm md:text-base mb-2 hidden md:block opacity-75">Bootsy Icons</p>
                <h1 className="text-base md:text-4xl mb-2 font-bold ">
                  {" "}
                  1700+ High-Quality <br/> UI Vector Icons
                </h1>
                <p className="text-base hidden md:block mb-4 opacity-75">
                  High-quality handcrafted icon set for websites, apps, social
                  networks, prints.
                </p>
                <Button className="ybutton secondary" path="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set">Download on UI8</Button>
              </div>
            </figcaption>
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
              <Link href="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set">UI8</Link>
            </p>
            <p>Year: 2022 </p>
          </Text>

        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
