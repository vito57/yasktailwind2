import LayoutAnimated from "@/components/global/layoutanimated";

import WorksHeader from "@/components/blocks/worksheader";
import WorksHero from "@/components/blocks/workshero";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import { Metadata } from "next";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Iconsaur - Bootstrap Based Icon System",
  description: "2400 handcrafted ui icons",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksHero
            underTitle="2400 Unique Icons"
            buttonUrl="https://ui8.net/gala-yask/products/iconsaur---bootstrap-icon-system"
            subTitle="Handcrafted multi-purpose icon set for websites, apps, social networks, print and more."
            title="High-Quality Modern Vector UI Icons Set"
            credits="Designed by Gala • Distributed by UI8 • Released 2024"
            btnTxt="Purchase Set"
          >
            <WorksImage
              src="/works/iconsaur/cover.png"
              width={3360}
              height={1248}
              className="bg-transparent  w-full"
              alt="Iconsaur"
            />
          </WorksHero>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Iconsaur — multi-purpose icon set. Bright and original icons for
              the user interface. The icon library consists of 2400+ unique ui
              icons, divided by 40 groups. Figma file well organised and ready
              for work. Svg and png file formats included. Iconsaur is a good
              choice for Bootstrap or Tailwind users. All icon names, are the
              same as Bootstrap icons. Makes your website or app look different.
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
            images={[{
              src: "/works/iconsaur/1.png",
            }, {
              src: "/works/iconsaur/2.png",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{
              src: "/works/iconsaur/3.png",
            }, {
              src: "/works/iconsaur/4.png",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{
              src: "/works/iconsaur/5.png",
            }, {
              src: "/works/iconsaur/6.png",
            }]}
          />
          <br />
          <WorksImageStack
            images={[{
              src: "/works/iconsaur/7.png",
            }, {
              src: "/works/iconsaur/8.png",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="gala" year="2024" client="UI8" />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
