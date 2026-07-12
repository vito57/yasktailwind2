import type { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Mira",
  description: "Mira. Landing page design",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-black">
          <WorksFigure>
            <WorksImage
              src="/works/miractal/cover.png"
              width={1120}
              height={416}
              className="w-full"
              alt="Evoxo"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Web design for Mira</p>
          </TextBlock>

          <br />
          <WorksImageStack

            images={[{
              src: "/works/miractal/desktop1.png",
              caption: "[fig 1] Main",
            }, {
              src: "/works/miractal/desktop2.png",
              caption: "[fig 2] Inner page",
            }]}
          />
          <br />
          <WorksImageStack
            height={954}

            images={[{
              src: "/works/miractal/desktop3.png",
              caption: "[fig 3] Inner page",
            }, {
              src: "/works/miractal/mobile.png",
              caption: "[fig 4] Mobile",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2025" client="Mira" />
          </TextBlock>


        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
