import LayoutAnimated from "@/components/global/layoutanimated";

import { Metadata } from "next";
import Link from "next/link";
import WorksImage from "@/components/blocks/worksimage";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import TextBlock from "@/components/global/textblock";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";

export const metadata: Metadata = {
  title: "Starc - Android App",
  description: "Script writing app for Android",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader>
          <WorksFigure>
            <WorksImage
              src="/works/starc/cover.png"
              width={1120}
              height={416}
              className="w-full"
              alt="Starc Android App"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Design a native application for Android. For mobile devices and
              tablets. Be close to platform gesign guides as possible. Android
              and{" "}
              <Link href={"/works/starcios"} className="ylink">
                IOS
              </Link>{" "}
              experience was made.
            </p>
          </TextBlock>
        </Section>

        <Section id="mobile">
          <TextBlock title="Mobile experience">
            <p>
              The Starc application simplifies the process of writing scripts
              and texts. It was necessary to follow the guidlines(Material
              Design) of the platform as much as possible and create a familiar
              and simple interaction experience for all devices.
            </p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starc/1.png"

              alt="Starc Mobile"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starc/2.png"

              alt="Starc Mobile"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starc/3.png"

              alt="Starc Mobile"
            />
          </WorksFigure>

          <br />
          <TextBlock title="Tablet experience">
            <p></p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starc/4.png"

              alt="Starc tablet"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starc/5.png"

              alt="Starc tablet"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starc/6.png"

              alt="Starc tablet"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary
              designer="vitaly"
              year="2021"
              client="Starc"
              link="https://starc.app/"
            />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
