import WorksFigure from "@/components/blocks/worksfigure";
import WorksHeader from "@/components/blocks/worksheader";
import WorksImage from "@/components/blocks/worksimage";
import WorksSummary from "@/components/blocks/workssummary";
import Article from "@/components/global/article";
import LayoutAnimated from "@/components/global/layoutanimated";
import Section from "@/components/global/section";
import TextBlock from "@/components/global/textblock";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "RestEvents - web design",
  description: "Website design for catering company",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksFigure>
            <WorksImage
              src="/works/restevents/cover.png"
              width={1120}
              height={416}
              className=" w-full"
              alt="riveo app"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Logo and Adaptive web site for catering company</p>
          </TextBlock>
          <br />
          <div className="columns-2 gap-5">
            <WorksFigure>
              <WorksImage
                width={1440}
                height={6948}
                src="/works/restevents/main.png"
              />
            </WorksFigure>
            <br />
            <WorksFigure>
              <WorksImage
                width={1440}
                height={4837}
                src="/works/restevents/event.png"
              />
            </WorksFigure>
            <br />
            <WorksFigure>
              <WorksImage
                width={1440}
                height={3725}
                src="/works/restevents/category.png"
              />
            </WorksFigure>
            <br />
            <WorksFigure>
              <WorksImage
                width={1440}
                height={5044}
                src="/works/restevents/about.png"
              />
            </WorksFigure>
            <br />
            <WorksFigure>
              <WorksImage
                width={1440}
                height={3474}
                src="/works/restevents/portfolio.png"
              />
            </WorksFigure>
          </div>
          <br />
          <WorksFigure>
            <WorksImage
              className="bg-transparent"
              width={3880}
              height={1864}
              src="/works/restevents/adaptive.png"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2024" client="black-sheep.ru" />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
