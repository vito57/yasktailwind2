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
              src="/works/bootsyduotone/cover.png"
              width={1120}
              height={416}
              alt="Drugcode cover"
            />
          </ArticleFigure>
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
            <p>Year: 2022 </p>
          </Text>
          <Button
            className="bg-ylime hover:bg-[#CBEA6E] w-full text-center text-xl"
            path="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set"
          >
            Download on UI8
          </Button>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
