import {
  Article,
  AnimateLayout,
  Text,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Summary,
  ArticleFigure,
  ArticleHeroSection,
} from "../../components/server";
import Link from "next/link";
export const metadata = {
  title: "Hand-drawn illustrations",
  description: "Hand-drawn illustrations",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <Section>
          <ArticleFigure>
            <BodyImage src="/works/illustrations/1.png" alt="1" />
          </ArticleFigure>
          <Text title="Vol. 1">
            <p>
              Remake of illustrations by{" "}
              <Link
                className="ylink"
                href="https://en.wikipedia.org/wiki/Victor_Chizhikov"
              >
                Viktor Chizhikov
              </Link>
              . Paper, watercolor
            </p>
          </Text>
          <br />
          <ArticleImageSection
            height={1760 / 2}
            image1={{
              src: "/works/illustrations/2s1760.png",
            }}
            image2={{
              src: "/works/illustrations/3s1760.png",
            }}
          />
          <br />
          <ArticleImageSection
            height={2170 / 2}
            image1={{
              src: "/works/illustrations/4s2170.png",
            }}
            image2={{
              src: "/works/illustrations/5s2170.png",
            }}
          />
          <br />
          <ArticleImageSection
            height={2000 / 2}
            image1={{
              src: "/works/illustrations/6s2000.png",
            }}
            image2={{
              src: "/works/illustrations/7s2000.png",
            }}
          />
          <br />
          <ArticleImageSection
            height={2230 / 2}
            image1={{
              src: "/works/illustrations/8s2230.png",
            }}
            image2={{
              src: "/works/illustrations/9s2230.png",
            }}
          />
          <br />
          <ArticleImageSection
            height={2160 / 2}
            image1={{
              src: "/works/illustrations/10s2160.png",
            }}
            image2={{
              src: "/works/illustrations/11s2160.png",
            }}
          />
          <br />
          <ArticleImageSection
            height={1900 / 2}
            image1={{
              src: "/works/illustrations/12s1900.png",
            }}
            image2={{
              src: "/works/illustrations/13s1900.png",
            }}
          />
          <br />
        </Section>
        <Section>
          <Text title="Vol. 2">
            <p>A series of illustrations for a book. Paper, ink</p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/illustrations/14.png" alt="14" />
          </ArticleFigure>
          <br />
          <ArticleImageSection
            height={2100}
            image1={{
              src: "/works/illustrations/15s2100.png",
            }}
            image2={{
              src: "/works/illustrations/16s2100.png",
            }}
          />
        </Section>
        <Section>
          <Text title="Vol. 3">
            <p>Educational illustrations. Paper, pencil</p>
          </Text>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/illustrations/17.png" alt="17" />
          </ArticleFigure>
          <br />
          <ArticleFigure>
            <BodyImage src="/works/illustrations/18.png" alt="17" />
          </ArticleFigure>
          <br />
        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="gala" year="2024" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
