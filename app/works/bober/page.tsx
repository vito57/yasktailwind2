import LayoutAnimated from "@/components/global/layoutanimated";

import { Metadata } from "next";
import WorksImage from "@/components/blocks/worksimage";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksHeader from "@/components/blocks/worksheader";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Bober - Adaptive web site",
  description: "Website for TV channel",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksFigure>
            <WorksImage
              src="/works/bober/cover.png"
              width={1120}
              height={416}

              alt="Bober TV"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Adaptive web site and logo for TV channel</p>
          </TextBlock>
          <br />
          <WorksFigure figcaption="New main page layout">
            <WorksImage
              src="/works/bober/main.png"

              alt="Bober main"
            />
          </WorksFigure>
          <br />
          <WorksFigure figcaption="Alternative main and article page">
            <WorksImage
              src="/works/bober/main2.png"

              alt="Bober main"
            />
          </WorksFigure>
          <br />
          <WorksImageStack

            images={[{ src: "/works/bober/3.png" }, {
              src: "/works/bober/logo.png",
            }]}
          />
          <br />
          <WorksImageStack

            images={[{ src: "/works/bober/1.png" }, {
              src: "/works/bober/3.png",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2019"
              client="PKVS"
              link="https://bober.ru"
            />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
