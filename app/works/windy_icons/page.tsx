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
        <ArticleHeader>
          <ArticleFigure>
            <BodyImage
              src="/works/windy_icons/cover.png"
              width={1120}
              height={416}
              alt="Drugcode cover"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Windy Icons - multi-purpose icon system. These are bright and
              original icons for the user interface. Windy Icons good choise for
              Bootstrap or Tailwind users. All icon names are the same as
              Boostrap's icon names. Makes your website or app look different.
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
          {/* <ArticleFigure>
            <BodyImage
              src="/works/windy_icons/fill_icons.png"
              width={2240}
              height={1792}
              className="bg-white"
              alt="All Icons"
            />
          </ArticleFigure> */}
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
