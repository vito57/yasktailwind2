import { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksHeader from "@/components/blocks/worksheader";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Taytega - Adaptive web site and logo design for engineering company",
  description: "Website and logo for engineering company",
};

const Taytega = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader>
          <WorksFigure>
            <WorksImage
              src="/works/taytega/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Taytega"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Adaptive website and logo design for engineering company Taytega
            </p>
          </TextBlock>
          <br />
          <WorksFigure figcaption="[fig 1] Branding">
            <WorksImage
              src="/works/taytega/taytega-logo.png"
              alt="Taytega logo"

            />
          </WorksFigure>
          <br />
          <WorksFigure figcaption="[fig 2] Logo">
            <WorksImage
              src="/works/taytega/taytega-logo-2.png"
              alt="Taytega logo"

            />
          </WorksFigure>
          <br />
          <WorksFigure figcaption="[fig 3] Main and inner page">
            <WorksImage
              src="/works/taytega/taytega1.png"
              alt="Main and inner page"

            />
          </WorksFigure>
          <br />
          <WorksFigure figcaption="[fig 4] Inner pages">
            <WorksImage
              src="/works/taytega/taytega2.png"

              alt="Inner pages"
            />
          </WorksFigure>
          <br />
          <WorksImageStack

            images={[{
              src: "/works/taytega/taytega3.png",
              caption: "[fig 5] Inner pages",
            }, {
              src: "/works/taytega/taytega4.png",
              caption: "[fig 6] Inner pages",
            }]}
          />
          <br />

          <WorksFigure figcaption="[fig 7] Overview">
            <WorksImage
              src="/works/taytega/taytega5.png"

              alt="Work overview"
            />
          </WorksFigure>
          <br />
          <WorksFigure figcaption="[fig 8] Mobile">
            <WorksImage

              src="/works/taytega/taytega7.png"
              alt="Mobile design"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2024"
              link={"https://taytega.ru/"}
              client="BlackSheep"
            />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Taytega;
