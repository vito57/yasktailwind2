import type { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import Article from "@/components/global/article";
import Section from "@/components/global/section";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";

export const metadata: Metadata = {
  title: "Evoxo",
  description: "Payment sevice. Landing page design",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader>
          <WorksFigure>
            <WorksImage
              src="/works/evoxo/cover.png"
              width={1120}
              height={416}
              className="w-full"
              alt="Evoxo"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Logo and web design for payment service</p>
          </TextBlock>

          <br />
          <WorksImageStack

            images={[{
              src: "/works/evoxo/logo.png",
              caption: "[fig 1] Logo",
            }, {
              src: "/works/evoxo/bento.png",
              caption: "[fig 2] Style",
            }]}
          />
          <br />
          <WorksFigure figcaption="[fig 4] Desktop">
            <WorksImage
              src="/works/evoxo/desktop.png"

              alt="[fig 4] Desktop"
            />
          </WorksFigure>
          <br />
          <WorksFigure figcaption="[fig 5] Mobile">
            <WorksImage
              src="/works/evoxo/mobile.png"

              alt="[fig 5] Mobile"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2025" client="Evoxo" />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
