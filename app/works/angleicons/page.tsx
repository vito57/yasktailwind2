import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import LayoutAnimated from "@/components/global/layoutanimated";
import WorksHeader from "@/components/blocks/worksheader";
import WorksImage from "@/components/blocks/worksimage";
import WorksHero from "@/components/blocks/workshero";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "AngleIcons - Bootstrap Based Icon System",
  description: "2400 handcrafted ui icons",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksHero
            underTitle="2400 Unique Icons"
            buttonUrl="https://ui8.net/gala-yask/products/angleicons-ui-icon-set"
            subTitle="Handcrafted multi-purpose icon set for websites, apps, social networks, print and more."
            title="High-Quality Modern Vector UI Icons Set"
            credits="Designed by Gala • Distributed by UI8 • Released 2024"
            btnTxt="Purchase Set"
          >
            <WorksImage
              src="/works/angleicons/cover.png"
              width={3200}
              height={1372}
              className="bg-transparent w-full"
              alt="Iconsaur"
            />
          </WorksHero>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              AngleIcons — multi-purpose icon set. Bright and original icons for
              the user interface. The icon library consists of 2400+ unique ui
              icons, divided by 40 groups. Figma file well organised and ready
              for work. Svg and png file formats included. AngleIcons is a good
              choice for Bootstrap or Tailwind users. All icon names, are the
              same as Bootstrap icons. Makes your website or app look different.
            </p>
          </TextBlock>
          <br />
          <WorksImageStack

            images={[{
              src: "/works/angleicons/communication.png",
            }, {
              src: "/works/angleicons/files.png",
            }]}
          />
          <br />
          <WorksImageStack

            images={[{
              src: "/works/angleicons/ui.png",
            }, {
              src: "/works/angleicons/brands.png",
            }]}
          />
          <br />
          <WorksImageStack

            images={[{
              src: "/works/angleicons/transport.png",
            }, {
              src: "/works/angleicons/world.png",
            }]}
          />
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/angleicons/lined_title.png"
              alt="lined and filled"
              className="bg-stone-100"
              width={3200}
              height={640}
            />
          </WorksFigure>
          <br />
          <WorksImageStack

            images={[{
              src: "/works/angleicons/lined.png",
            }, {
              src: "/works/angleicons/filled.png",
            }]}
          />
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/angleicons/makes_title.png"
              alt="makes your design different"
              className="bg-stone-100"
              width={3200}
              height={640}
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/angleicons/preview.png"
              alt="lined and filled"
              width={3600}
              height={2400}
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/angleicons/2400_title.png"
              alt="2400 unique icons"
              className="bg-stone-100"
              width={3200}
              height={640}
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              className="bg-stone-100"
              src="/works/angleicons/2400.png"
            />
          </WorksFigure>
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
