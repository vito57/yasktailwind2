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
  title: "Riveo - Refactoring UI",
  description: "Refactoring UI of riveo app",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader>
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/cover.png"
              width={1120}
              height={416}
              alt="riveo app"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>Refactoring UI/UX of Riveo app</p>
          </Text>
          {/* <ArticleFigure>
            <BodyImage src="/works/riveo/about.png" alt="riveo main" />
          </ArticleFigure> */}
          <ArticleFigure>
            <BodyImage src="/works/riveo/review.png" alt="riveo main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/riveo/newui.png" alt="riveo main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/riveo/editor.png" alt="riveo main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/riveo/preview_mode.png" alt="riveo main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/riveo/share.png" alt="riveo main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/riveo/create.png" alt="riveo main" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/riveo/preview.png" alt="riveo main" />
          </ArticleFigure>
        </Section>

        <Section id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
