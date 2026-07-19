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
  title: "K3d - 3d editor",
  description: "3d editor design",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-[#02C5D2]">
          <WorksFigure>
            <WorksImage
              src="/works/k3d/cover.png"
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
              The project is an intuitive 3D model generator that combines
              simple controls with powerful algorithms for quickly creating
              custom objects. The interface focuses on a step-by-step workflow:
              parameter selection, real-time preview, and export to standard
              formats for further refinement.
            </p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              width={1440}
              height={960}

              src="/works/k3d/k3d1.png"
              alt="ui"
            ></WorksImage>
          </WorksFigure>
          <br />
          <WorksFigure figcaption="Rendering">
            <WorksImage
              width={1440}
              height={960}

              src="/works/k3d/k3d3.png"
              alt="ui"
            ></WorksImage>
          </WorksFigure>

          <br />
          <WorksImageStack
            width={1440}
            height={960}
            images={[{
              src: "/works/k3d/k3d2.png",
            }, {
              src: "/works/k3d/k3d4.png",
            }]}
          ></WorksImageStack>

          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2026" client="UESMO" />
          </TextBlock>
        </Section>
      </Article>
    </LayoutAnimated>
  );
};

export default Page;
