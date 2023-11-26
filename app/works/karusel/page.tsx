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
        <ArticleHeader className="bg-green-200">
          <ArticleFigure>
            <BodyImage
              src="/works/karusel/cover.png"
              width={1120}
              height={416}
              className="bg-green-200"
              alt="Karusel TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about" className="mb-8 px-4 relative container">
          <Text title="About">
            <p>
              Adaptive website for the children's TV channel Carousel. Big job.
              Poster, TV program, competitions, full-fledged online store,
              program tracking, social network for children, graphic content and
              many more. Made by a small team of 5 people. My role is designer.
            </p>
          </Text>
          <ArticleFigure figcaption="Main page">
            <BodyImage src="/works/karusel/main_desktop.png" />
          </ArticleFigure>
          <ArticleFigure figcaption="Games and TV program">
            <BodyImage src="/works/karusel/games_desktop.png" />
          </ArticleFigure>
          <ArticleFigure figcaption="Video and news">
            <BodyImage src="/works/karusel/video_desktop.png" />
          </ArticleFigure>
        </Section>
        <Section id="mobile" className="container">
          <Text title="Mobile">
            <p>The website is fully responsive.</p>
          </Text>
          <ArticleFigure figcaption="Main, Schedule, Article">
            <BodyImage src="/works/karusel/main_mobile.png" />
          </ArticleFigure>
          <ArticleFigure figcaption="Game, Video, Videos">
            <BodyImage src="/works/karusel/article_mobile.png" />
          </ArticleFigure>
          <ArticleFigure figcaption="Navigation">
            <BodyImage src="/works/karusel/mobile_menu.png" />
          </ArticleFigure>
          <ArticleFigure figcaption="Videos, Games, News">
            <BodyImage src="/works/karusel/games_mobile.png" />
          </ArticleFigure>
        </Section>
        <Section id="styles" className="container">
          <Text title="Styles">
            <p>
              The design is based on Bootstrap. Prepared Bootstrap theme,
              created wireframes and prototypes.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/karusel/style_guide.png" />
          </ArticleFigure>
          <ArticleFigure>
            <BodyImage src="/works/karusel/templates.png" />
          </ArticleFigure>
        </Section>
        {/* BRANDING */}
        <Section id="content" className="container">
          <Text title="Content design">
            <p>
              I created and drew tons of 2d and 3d content for a large number of
              parallax headers
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/karusel/content.png" />
          </ArticleFigure>
          <Text>
            <p>
              I designed and code the adaptive parallax Hero header. 2 types of
              such headers have been made - for pages and for sections
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage src="/works/karusel/parallax.png" />
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
