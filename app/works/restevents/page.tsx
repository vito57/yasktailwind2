import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Summary,
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "RestEvents - web design",
  description: "Website design for catering company",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-zinc-900">
          <ArticleFigure>
            <BodyImage
              src="/works/restevents/cover.png"
              width={1120}
              height={416}
              className=" w-full"
              alt="riveo app"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Logo and Adaptive web site for catering company</p>
          </Text>
          <div className="columns-2 mb-6">
            <ArticleFigure>
              <BodyImage src="/works/restevents/main.png" />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage src="/works/restevents/event.png" />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage src="/works/restevents/category.png" />
            </ArticleFigure>

            <ArticleFigure>
              <BodyImage src="/works/restevents/about.png" />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage src="/works/restevents/portfolio.png" />
            </ArticleFigure>
          </div>
          <ArticleFigure>
            <BodyImage
              className="bg-transparent"
              src="/works/restevents/adaptive.png"
            />
          </ArticleFigure>
        </Section>
        <Section id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" client="black-sheep.ru" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
