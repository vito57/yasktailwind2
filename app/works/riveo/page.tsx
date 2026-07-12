import { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Riveo - Refactoring UI",
  description: "Refactoring UI of riveo app",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader>
          <WorksFigure>
            <WorksImage
              src="/works/riveo/cover.png"
              width={1120}
              height={416}
              alt="riveo app"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Refactoring UI/UX of Riveo app</p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/review.png"

              alt="riveo main"
              height={1080}
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/newui.png"

              alt="riveo main"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/editor.png"

              alt="riveo main"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/preview_mode.png"

              alt="riveo main"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/share.png"

              alt="riveo main"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/create.png"

              alt="riveo main"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/riveo/preview.png"

              alt="riveo main"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2024" />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
