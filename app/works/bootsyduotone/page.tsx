import { Metadata } from "next";

import LayoutAnimated from "@/components/global/layoutanimated";
import WorksImage from "@/components/blocks/worksimage";
import WorksHeader from "@/components/blocks/worksheader";
import WorksHero from "@/components/blocks/workshero";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Bootsy Doutone Icons",
  description: "Icon set",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksHero
            underTitle="Bootsy Doutone Icons"
            title="1700+ High-Quality UI Vector Icons"
            subTitle="High-quality handcrafted icon set for websites, apps, social
          networks, prints."
            credits="Designed by Gala • Distributed by UI8 • Released 2021"
            buttonUrl="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set"
          >
            <WorksImage
              src="/works/bootsyduotone/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Bootsy duotone icons"
            />
          </WorksHero>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>Multiplatform interface icons set, based on Bootstrap</p>
          </TextBlock>
          <br />
          <WorksImageStack
            images={[{ src: "/works/bootsyduotone/1.jpeg" }, {
              src: "/works/bootsyduotone/2.jpeg",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{ src: "/works/bootsyduotone/3.jpeg" }, {
              src: "/works/bootsyduotone/4.jpeg",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{ src: "/works/bootsyduotone/6.jpeg" }, {
              src: "/works/bootsyduotone/5.jpeg",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="gala"
              year="2022"
              client="Yask"
              link="https://ui8.net/gala-yask/products/bootsy-duotone-icons---duotone-icon-set"
            />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
