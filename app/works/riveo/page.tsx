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
        <ArticleHeader className="bg-zinc-900">
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
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/review.png"
              className="bg-zinc-900"
              alt="riveo main"
              height={1080}
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/newui.png"
              className="bg-zinc-900"
              alt="riveo main"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/editor.png"
              className="bg-zinc-900"
              alt="riveo main"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/preview_mode.png"
              className="bg-zinc-900"
              alt="riveo main"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/share.png"
              className="bg-zinc-900"
              alt="riveo main"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/create.png"
              className="bg-zinc-900"
              alt="riveo main"
            />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage
              src="/works/riveo/preview.png"
              className="bg-zinc-900"
              alt="riveo main"
            />
          </ArticleFigure>
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
