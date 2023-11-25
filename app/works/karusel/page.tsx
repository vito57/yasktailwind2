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
  title: "Karusel - adaptive web site",
  description: "Website for kids TV channel",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-slate-100">
          <ArticleFigure>
            <BodyImage
              src="/works/karusel/cover.png"
              width={1120}
              height={416}
              alt="Karusel TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Adaptive design, content creation, and layout of a children's TV
              channel website.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/karusel/main_desktop.png" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/karusel/games_desktop.png" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/karusel/style_guide.png"
              width={1600}
              height={1200}
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage
              src="/works/karusel/templates.png"
              width={1600}
              height={1200}
            />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/karusel/article_mobile.png" />
          </ArticleFigure>
        </Section>
        <Section id="styles" className="container">
          {/* <ArticleFigure>
            <BodyImage src="/works/karusel/games_mobile.png" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/karusel/article_mobile.png" />
          </ArticleFigure> */}

          <Text title="About">
            <p>
              Adaptive website design and layout for a children's TV channel
            </p>
          </Text>
          <ArticleImageSection
            data1={{
              src: "/works/karusel/games_mobile.png",
              caption: "Games",
            }}
            data2={{
              src: "/works/karusel/article_mobile.png",
              caption: "Article",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/karusel/style_guide.png",
              caption: "style guide",
            }}
            data2={{
              src: "/works/karusel/templates.png",
              caption: "Templates",
            }}
          />
        </Section>
        {/* BRANDING */}
        <Section id="content" className="container">
          <Text title="Content design">
            <p>
              I created and drew content for a large number of parallax headers
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/karusel/content.png" />
          </ArticleFigure>
          <ArticleImageSection
            data1={{
              src: "/works/karusel/decorator_header.gif",
            }}
            data2={{
              src: "/works/karusel/contest_header.gif",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/karusel/pitomets_header.gif",
            }}
            data2={{
              src: "/works/karusel/sadovod_header.gif",
            }}
          />
          <ArticleImageSection
            data1={{
              src: "/works/karusel/blue.gif",
            }}
            data2={{
              src: "/works/karusel/red.gif",
            }}
          />
        </Section>
        <Section id="summary" className="container">
          <Text title="Summary">
            <p>
              Designer:{" "}
              <Link className="ylink" href="/vitaly">
                Vitaly
              </Link>{" "}
            </p>
            <p>Client: PKVS </p>
            <p>
              Live:{" "}
              <Link className="ylink" href="https://www.karusel-tv.ru/">
                karusel-tv.ru
              </Link>
            </p>
            <p>Year: 2016 </p>
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
