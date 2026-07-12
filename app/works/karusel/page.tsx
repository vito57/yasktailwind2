import { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Karusel - adaptive web site",
  description: "Website for kids TV channel",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksFigure>
            <WorksImage
              src="/works/karusel/cover.png"
              width={1120}
              height={416}
              className="bg-transparent  w-full"
              alt="Karusel TV"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Adaptive website for the childrens TV channel Carousel. Big job.
              Poster, TV program, competitions, full-fledged online store,
              program tracking, social network for children, graphic content and
              many more. Made by a small team of 5 people. My role is designer.
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
            images={[{
              src: "/works/karusel/main_desktop.png",
            }, {
              src: "/works/karusel/games_desktop.png",
            }]}
          />

          <br />
          <TextBlock title="Mobile">
            <p>The website is fully responsive.</p>
          </TextBlock>
          <br />
          <WorksImageStack
            height={1008}

            images={[{
              src: "/works/karusel/main_mobile.png",
            }, {
              src: "/works/karusel/article_mobile.png",
            }]}
          />
          <br />
          <WorksImageStack
            height={1008}

            images={[{
              src: "/works/karusel/mobile_menu.png",
            }, {
              src: "/works/karusel/games_mobile.png",
            }]}
          />
          <br />
          <TextBlock title="Styles">
            <p>
              The design is based on Bootstrap. Prepared Bootstrap theme,
              created wireframes and prototypes.
            </p>
          </TextBlock>
          <br />
          <WorksImageStack

            images={[{
              src: "/works/karusel/style_guide.png",
            }, {
              src: "/works/karusel/templates.png",
            }]}
          />
          <br />
          <TextBlock title="Content design">
            <p>
              I created and drew tons of 2d and 3d content for a large number of
              parallax headers
            </p>
          </TextBlock>
          <br />
          <WorksImageStack

            images={[{
              src: "/works/karusel/content.png",
            }, {
              src: "/works/karusel/parallax.png",
            }]}
          />
          <br />
          <TextBlock>
            <p>
              I designed and code the adaptive parallax Hero header. 2 types of
              such headers have been made - for pages and for sections
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
            images={[{
              src: "/works/karusel/decorator_header.gif",
            }, {
              src: "/works/karusel/contest_header.gif",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{
              src: "/works/karusel/pitomets_header.gif",
            }, {
              src: "/works/karusel/sadovod_header.gif",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{
              src: "/works/karusel/blue.gif",
            }, {
              src: "/works/karusel/red.gif",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2015-2016"
              client="PKVS"
              link="https://www.karusel-tv.ru/"
            />

          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
