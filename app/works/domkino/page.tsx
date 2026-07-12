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
  title: "DomKino",
  description: "Adaptive website for TV",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader >
          <WorksFigure>
            <WorksImage
              src="/works/domkino/cover.png"
              width={1120}
              height={416}

              alt="Domkino website"
            />
          </WorksFigure>
        </WorksHeader>

        <Section id="about">
          <TextBlock title="About">
            <p>Design of an adaptive website for the Dom Kino TV channel</p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/domkino/layout_1.png"
              alt="DomKino website layout"
              className="bg-ylightgrey"
            />
          </WorksFigure>
          <br />
          <TextBlock title="">
            <p>
              When designing a layout, it was necessary to provide as many
              advertising places as possible and dont forget about users. I
              prepared different options for layouts with an adaptive and tested
              them.
            </p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/domkino/layout_2.png"
              alt="DomKino website layout"
              height={1354}
              className="bg-ylightgrey"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/domkino/layout_3.png"
              alt="DomKino website article"
              className="bg-ylightgrey"
            />
          </WorksFigure>
          <br />
          <TextBlock title="">
            <p>Regular and rich article(with image header) templates. </p>
          </TextBlock>
          <br />
          <WorksImageStack

            images={[{
              src: "/works/domkino/article_image.png",
            }, {
              src: "/works/domkino/article.png",
            }]}
          />

          <br />
          <TextBlock title="Styles">
            <p>All elements provided in style guide.</p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/domkino/styles.png"
              alt="DomKino website styles"
              className="bg-ylightgrey"
            />
          </WorksFigure>
          <br />
          <WorksImageStack
            images={[{
              src: "/works/domkino/1.png",
            }, {
              src: "/works/domkino/2.png",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{
              src: "/works/domkino/5.png",
            }, {
              src: "/works/domkino/6.png",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2018"
              client="PKVS"
              link="https://www.domkino.tv/"
            />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
