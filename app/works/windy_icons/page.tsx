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
  title: "Drugcode - Code editor design",
  description: "Story about Drugcode editor design",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-[url('/works/windy_icons/bg.png')] bg-cover">
        <ArticleHeroSection>
            <BodyImage
              src="/works/windy_icons/cover.png"
              width={1120}
              height={416}
             className="bg-transparent"
              alt="Bootsy Icons"
            />
            <figcaption className="absolute  md:top-8 md:right-8 md:bottom-8 md:left-8 top-0 left-0 right-0 bottom-0 flex flex-col justify-center ">
              <div className="max-w-sm">
                <p className="text-sm md:text-base mb-2 hidden md:block opacity-75">Windy Icons</p>
                <h1 className="text-base md:text-4xl mb-2 font-bold ">
                  {" "}
                  2300+ High-Quality <br/> UI Vector Icons
                </h1>
                <p className="text-base hidden md:block mb-4 opacity-75">
                  High-quality handcrafted icon set for websites, apps, social
                  networks, prints.
                </p>
                <Button className="bg-white hover:bg-slate-100" path="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set">Download on UI8</Button>
              </div>
            </figcaption>
          </ArticleHeroSection>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Windy Icons - multi-purpose icon system. These are bright and
              original icons for the user interface. Windy Icons good choise for
              Bootstrap or Tailwind users. All icon names are the same as
              Boostraps icon names. Makes your website or app look different.
            </p>
          </Text>
        </Section>

        {/* BRANDING */}

        <Section className="container">
          <ArticleImageSection
            data1={{
              src: "/works/windy_icons/line_icons.png",
              caption: "Lined",
            }}
            data2={{
              src: "/works/windy_icons/fill_icons.png",
              caption: "Filled",
            }}
          />

          <Text>
            <p>
              The icon library consists of over 2,300 UI icons. All icons are
              Figma components. They are made in two styles (line and fill) and
              retain a lively line. This makes the system flexible and
              customizable to suit different styles.
            </p>
          </Text>

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
            <p>Year: 2023 </p>
          </Text>
          <Button
            className="bg-ylime hover:bg-[#CBEA6E] w-full text-center text-xl"
            path="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set"
          >
            Download on UI8
          </Button>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
