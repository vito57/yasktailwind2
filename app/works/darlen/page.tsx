import LayoutAnimated from "@/components/global/layoutanimated";

import { Metadata } from "next";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Darlen App - shoping mobile app",
  description: "Shoping mobile app",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader>
          <WorksFigure>
            <WorksImage
              src="/works/darlen/cover.png"
              width={1120}
              height={416}
              alt="Darlen app"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Darlen-Fashion Platform for the presentation of unique brands.
              Change the product in the case in the application section!
            </p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage src="/works/darlen/1.png" alt="Darlen" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/darlen/2.png" alt="Darlen" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/darlen/3.png" alt="Darlen" />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2019"
              client="BlackSheep"
              link="https://apps.apple.com/ru/app/darlen/id1524331706"
            />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
