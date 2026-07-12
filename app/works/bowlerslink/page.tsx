import LayoutAnimated from "@/components/global/layoutanimated";

import WorksImage from "@/components/blocks/worksimage";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksHeader from "@/components/blocks/worksheader";
import { Metadata } from "next";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Bowlerslink - Adaptive web site for education platform",
  description: "Website for bowling platform",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader>
          <WorksFigure>
            <WorksImage
              src="/works/bowlerslink/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bober TV"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Adaptive website and logo concept for bowling educational platform
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
            images={[{ src: "/works/bowlerslink/logo.png" }, { src: "/works/bowlerslink/cap.png" }]}
          />
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/bowlerslink/main.png"
              alt="BowlersLink main page"
            />
          </WorksFigure>
          <br />
          <WorksImageStack
            images={[{ src: "/works/bowlerslink/mobile1.png" }, { src: "/works/bowlerslink/mobile2.png" }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2024" client="BlackSheep" />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
