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
          <ArticleImageSection
            height={1760}
            data1={{
              src: "/works/illustrations/2s1760.png",
            }}
            data2={{
              src: "/works/illustrations/3s1760.png",
            }}
          />

          <ArticleImageSection
            height={2170}
            data1={{
              src: "/works/illustrations/4s2170.png",
            }}
            data2={{
              src: "/works/illustrations/5s2170.png",
            }}
          />
          <ArticleImageSection
            height={2000}
            data1={{
              src: "/works/illustrations/6s2000.png",
            }}
            data2={{
              src: "/works/illustrations/7s2000.png",
            }}
          />
          <ArticleImageSection
            height={2230}
            data1={{
              src: "/works/illustrations/8s2230.png",
            }}
            data2={{
              src: "/works/illustrations/9s2230.png",
            }}
          />
          <ArticleImageSection
            height={2160}
            data1={{
              src: "/works/illustrations/10s2160.png",
            }}
            data2={{
              src: "/works/illustrations/11s2160.png",
            }}
          />
          <ArticleImageSection
            height={1900}
            data1={{
              src: "/works/illustrations/12s1900.png",
            }}
            data2={{
              src: "/works/illustrations/13s1900.png",
            }}
          />
        </Section>
        <Section>
          <Text title="Vol. 2">
            <p>A series of illustrations for a book. Paper, ink</p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/illustrations/14.png" alt="14" />
          </ArticleFigure>
          <ArticleImageSection
            height={2100}
            data1={{
              src: "/works/illustrations/15s2100.png",
            }}
            data2={{
              src: "/works/illustrations/16s2100.png",
            }}
          />
        </Section>
        <Section>
          <Text title="Vol. 3">
            <p>Educational illustrations. Paper, pencil</p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/illustrations/17.png" alt="17" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/illustrations/18.png" alt="17" />
          </ArticleFigure>
        </Section>
        <Section id="summary">
          <Text title="Summary">
            <Summary designer="gala" year="2024" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
