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
              className="bg-transparent  w-full"
              alt="Karusel TV"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Adaptive website for the childrens TV channel Carousel. Big job.
              Poster, TV program, competitions, full-fledged online store,
              program tracking, social network for children, graphic content and
              many more. Made by a small team of 5 people. My role is designer.
            </p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/main_desktop.png",
            }}
            image2={{
              src: "/works/karusel/games_desktop.png",
            }}
          />

          <br />
          <Text title="Mobile">
            <p>The website is fully responsive.</p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/main_mobile.png",
            }}
            image2={{
              src: "/works/karusel/article_mobile.png",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/mobile_menu.png",
            }}
            image2={{
              src: "/works/karusel/games_mobile.png",
            }}
          />
          <br />
          <Text title="Styles">
            <p>
              The design is based on Bootstrap. Prepared Bootstrap theme,
              created wireframes and prototypes.
            </p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/style_guide.png",
            }}
            image2={{
              src: "/works/karusel/templates.png",
            }}
          />
          <br />
          <Text title="Content design">
            <p>
              I created and drew tons of 2d and 3d content for a large number of
              parallax headers
            </p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/content.png",
            }}
            image2={{
              src: "/works/karusel/parallax.png",
            }}
          />
          <br />
          <Text>
            <p>
              I designed and code the adaptive parallax Hero header. 2 types of
              such headers have been made - for pages and for sections
            </p>
          </Text>
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/decorator_header.gif",
            }}
            image2={{
              src: "/works/karusel/contest_header.gif",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/pitomets_header.gif",
            }}
            image2={{
              src: "/works/karusel/sadovod_header.gif",
            }}
          />
          <br />
          <ArticleImageSection
            image1={{
              src: "/works/karusel/blue.gif",
            }}
            image2={{
              src: "/works/karusel/red.gif",
            }}
          />
        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2015-2016"
              client="PKVS"
              link="https://www.karusel-tv.ru/"
            />

            {/* <Link className="ylink" href="https://xd.adobe.com/view/1a850fed-be7f-4ecc-4394-85bbb759d9a9-6cb4/screen/4991d63d-36a1-4724-b5b7-f77ec795e2fd/?fullscreen">
Adobe XD Prototype
              </Link> */}
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
