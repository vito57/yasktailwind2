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
  title: "Starc - IOS native App",
  description: "Script writing app for IOS",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-green-100">
          <ArticleFigure>
            <BodyImage
              src="/works/starcios/cover.png"
              width={1120}
              height={416}
              className="bg-green-100  w-full"
              alt="Starc IOS App"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Design a native application for IOS. For mobile devices and
              tablets. Be close to platform gesign guides as possible.{" "}
              <Link href={"/works/starc"} className="ylink">
                Android{" "}
              </Link>
              and IOS experience was made.
            </p>
          </Text>
        </Section>

        <Section id="mobile" className="container">
          <Text title="Mobile experience">
            <p>
              The Starc application reinventing the screenwriting software. It
              was necessary to follow the guidlines(HIG) of the platform as much
              as possible and create a familiar and simple interaction
              experience for all devices.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/starcios/1.png" alt="Starc Mobile" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starcios/2.png" alt="Starc Mobile" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starcios/3.png" alt="Starc Mobile" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/starcios/f1.png"
              alt="Starc Mobile"
              width={2068}
              height={5790}
            />
          </ArticleFigure>
        </Section>
        <Section id="tablet" className="container">
          <Text title="Tablet experience">
            <p></p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/starcios/4.png" alt="Starc tablet" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starcios/5.png" alt="Starc tablet" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starcios/6.png" alt="Starc tablet" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/starcios/f2.png"
              width={3501}
              height={1776}
              alt="Starc tablet"
            />
          </ArticleFigure>
        </Section>
        <Section id="summary" className="container">
          <Text title="Summary">
            <p>
              Designer:{" "}
              <Link className="ylink" href="/vitaly">
                Vitaly
              </Link>{" "}
            </p>
            <p>
              Client:{" "}
              <Link className="ylink" href="https://starc.app/">
                starc.app
              </Link>{" "}
            </p>
            <p>Year: 2021 </p>
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
