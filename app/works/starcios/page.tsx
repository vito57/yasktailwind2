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
  title: "Starc - IOS native App",
  description: "Script writing app for IOS",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-100">
          <ArticleFigure>
            <BodyImage
              src="/works/starcios/cover.png"
              width={1120}
              height={416}
              className=" w-full"
              alt="Starc IOS App"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
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
          <br />
          <Text title="Mobile experience">
            <p>
              The Starc application reinventing the screenwriting software. It
              was necessary to follow the guidlines(HIG) of the platform as much
              as possible and create a familiar and simple interaction
              experience for all devices.
            </p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/starcios/1.png" alt="Starc Mobile" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/starcios/2.png" alt="Starc Mobile" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/starcios/3.png" alt="Starc Mobile" />
          </ArticleFigure>
          <br />
          <Text title="Tablet experience">
            <p></p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/starcios/4.png" alt="Starc tablet" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/starcios/5.png" alt="Starc tablet" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/starcios/6.png" alt="Starc tablet" />
          </ArticleFigure>
        </Section>
        <aside id="summary">
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
