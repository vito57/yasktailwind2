import { Metadata } from "next";
import {
  Article,
  AnimateLayout,
  Text,

  Section,
  ArticleHeader,

  Summary,
} from "../../components/server";
import LayoutAnimated from "@/components/global/layoutanimated";
import WorksImage from "@/components/blocks/worksimage";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import TextBlock from "@/components/global/textblock";
import WorksSummary from "@/components/blocks/workssummary";

export const metadata: Metadata = {
  title: "Poehali - Adaptive web site",
  description: "Website for TV channel",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksFigure>
            <WorksImage
              src="/works/poehali/cover.png"
              width={1120}
              height={416}
              className="bg-transparent  w-full"
              alt="Poehali TV"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Adaptive web site for TV channel</p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage src="/works/poehali/main.png" alt="Restevents main" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/poehali/2.png" alt="Poehali main" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/poehali/adaptive1.png" alt="Poehali main" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/poehali/adaptive2.png" alt="Poehali main" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/poehali/styles.png" alt="Poehali main" />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2019"
              client="PKVS"
              link="https://www.poehali.tv/"
            />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
