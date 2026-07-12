import { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import WorksHeader from "@/components/blocks/worksheader";
import WorksHero from "@/components/blocks/workshero";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
import WorksImage from "@/components/blocks/worksimage";
export const metadata: Metadata = {
  title: "Bootsy Icons - UI icon set for Bootstrap",
  description: "1700+ handcrafted ui icons",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksHero
            underTitle="1700+ UI Icons"
            buttonUrl="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set"
            subTitle="High-quality handcrafted icon set for websites, apps, social
                  networks, prints."
            title="High-Quality UI Vector Icons"

          >
            <WorksImage
              src="/works/bootsy/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bootsy Icons"
            />
          </WorksHero>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Multiplatform interface icons set, based on Bootstrap</p>
          </TextBlock>
          <br />
          <WorksImageStack
            className="bg-ylightgrey"
            images={[{ src: "/works/bootsy/1.png" }, {
              src: "/works/bootsy/2.png",
            }]}
          />
          <br />
          <WorksImageStack
            className="bg-ylightgrey"
            images={[{ src: "/works/bootsy/3.png" }, {
              src: "/works/bootsy/4.png",
            }]}
          />
          <br />
          <WorksImageStack
            className="bg-ylightgrey"
            images={[{ src: "/works/bootsy/5.png" }, {
              src: "/works/bootsy/6.png",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="gala"
              year="2022"
              client="Yask"
              link="https://ui8.net/gala-yask/products/bootsy-icons---bootstrap-icon-set"
            />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
