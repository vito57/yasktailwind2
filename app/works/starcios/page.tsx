import LayoutAnimated from "@/components/global/layoutanimated";


import Link from "next/link";
import { Metadata } from "next";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksSummary from "@/components/blocks/workssummary";
import Article from "@/components/global/article";
import Section from "@/components/global/section";
export const metadata: Metadata = {
  title: "Starc - IOS native App",
  description: "Script writing app for IOS",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-ylightgrey">
          <WorksFigure>
            <WorksImage
              src="/works/starcios/cover.png"
              width={1120}
              height={416}
              className=" w-full"
              alt="Starc IOS App"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Design a native application for IOS. For mobile devices and
              tablets. Be close to platform gesign guides as possible.{" "}
              <Link href={"/works/starc"}>
                Android{" "}
              </Link>
              and IOS experience was made.
            </p>
          </TextBlock>
          <br />
          <TextBlock title="Mobile experience">
            <p>
              The Starc application reinventing the screenwriting software. It
              was necessary to follow the guidlines(HIG) of the platform as much
              as possible and create a familiar and simple interaction
              experience for all devices.
            </p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starcios/1.png"
              className="bg-ylightgrey"
              alt="Starc Mobile"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starcios/2.png"
              className="bg-ylightgrey"
              alt="Starc Mobile"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starcios/3.png"
              className="bg-ylightgrey"
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
              src="/works/starcios/4.png"
              className="bg-ylightgrey"
              alt="Starc tablet"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starcios/5.png"
              className="bg-ylightgrey"
              alt="Starc tablet"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/starcios/6.png"
              className="bg-ylightgrey"
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
