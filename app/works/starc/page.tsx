import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleHeader,
  BodyImage,
  Summary,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Starc - Android App",
  description: "Script writing app for Android",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-ylightgrey">
          <ArticleFigure>
            <BodyImage
              src="/works/starc/cover.png"
              width={1120}
              height={416}
              className="w-full"
              alt="Starc Android App"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Design a native application for Android. For mobile devices and
              tablets. Be close to platform gesign guides as possible. Android
              and{" "}
              <Link href={"/works/starcios"} className="ylink">
                IOS
              </Link>{" "}
              experience was made.
            </p>
          </Text>
        </Section>

        <Section id="mobile">
          <Text title="Mobile experience">
            <p>
              The Starc application simplifies the process of writing scripts
              and texts. It was necessary to follow the guidlines(Material
              Design) of the platform as much as possible and create a familiar
              and simple interaction experience for all devices.
            </p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/starc/1.png"
              className="bg-ylightgrey"
              alt="Starc Mobile"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/starc/2.png"
              className="bg-ylightgrey"
              alt="Starc Mobile"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/starc/3.png"
              className="bg-ylightgrey"
              alt="Starc Mobile"
            />
          </ArticleFigure>

          <br />
          <Text title="Tablet experience">
            <p></p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/starc/4.png"
              className="bg-ylightgrey"
              alt="Starc tablet"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/starc/5.png"
              className="bg-ylightgrey"
              alt="Starc tablet"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/starc/6.png"
              className="bg-ylightgrey"
              alt="Starc tablet"
            />
          </ArticleFigure>
        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2021"
              client="Starc"
              link="https://starc.app/"
            />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
