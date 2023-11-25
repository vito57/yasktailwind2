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
              src="/works/bootsy/cover.png"
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
            <p>Year: 2022 </p>
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
