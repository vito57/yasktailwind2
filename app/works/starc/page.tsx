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
        <ArticleHeader className="bg-slate-100">
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
          <ArticleFigure>
            <BodyImage src="/works/starc/1.png" alt="Starc Mobile" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starc/2.png" alt="Starc Mobile" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starc/3.png" alt="Starc Mobile" />
          </ArticleFigure>
          {/* <ArticleFigure>
            <BodyImage src="/works/starc/f1.png" alt="Starc Mobile" />
          </ArticleFigure> */}
        </Section>
        <Section id="tablet">
          <Text title="Tablet experience">
            <p></p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/starc/4.png" alt="Starc tablet" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starc/5.png" alt="Starc tablet" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/starc/6.png" alt="Starc tablet" />
          </ArticleFigure>
          {/* <ArticleFigure>
            <BodyImage src="/works/starc/f2.png" alt="Starc tablet" />
          </ArticleFigure> */}
        </Section>
        <Section id="summary">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2021"
              client="Starc"
              link="https://starc.app/"
            />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
