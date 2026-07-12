import { Metadata } from "next";

import Link from "next/link";
import LayoutAnimated from "@/components/global/layoutanimated";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Hand-drawn illustrations",
  description: "Hand-drawn illustrations",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <Section>
          <WorksFigure>
            <WorksImage src="/works/illustrations/1.png" alt="1" />
          </WorksFigure>
          <br />
          <TextBlock title="Vol. 1">
            <p>
              Remake of illustrations by{" "}
              <Link
                className="ylink"
                href="https://en.wikipedia.org/wiki/Victor_Chizhikov"
              >
                Viktor Chizhikov
              </Link>
              . Paper, watercolor
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
            height={1760 / 2}
            images={[{
              src: "/works/illustrations/2s1760.png",
            }, {
              src: "/works/illustrations/3s1760.png",
            }]}
          />
          <br />
          <WorksImageStack
            height={2170 / 2}
            images={[{
              src: "/works/illustrations/4s2170.png",
            }, {
              src: "/works/illustrations/5s2170.png",
            }]}
          />
          <br />
          <WorksImageStack
            height={2000 / 2}
            images={[{
              src: "/works/illustrations/6s2000.png",
            }, {
              src: "/works/illustrations/7s2000.png",
            }]}
          />
          <br />
          <WorksImageStack
            height={2230 / 2}
            images={[{
              src: "/works/illustrations/8s2230.png",
            }, {
              src: "/works/illustrations/9s2230.png",
            }]}
          />
          <br />
          <WorksImageStack
            height={2160 / 2}
            images={[{
              src: "/works/illustrations/10s2160.png",
            }, {
              src: "/works/illustrations/11s2160.png",
            }]}
          />
          <br />
          <WorksImageStack
            height={1900 / 2}
            images={[{
              src: "/works/illustrations/12s1900.png",
            }, {
              src: "/works/illustrations/13s1900.png",
            }]}
          />
          <br />

          <TextBlock title="Vol. 2">
            <p>A series of illustrations for a book. Paper, ink</p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage src="/works/illustrations/14.png" alt="14" />
          </WorksFigure>
          <br />
          <WorksImageStack
            height={2100}
            images={[{
              src: "/works/illustrations/15s2100.png",
            }, {
              src: "/works/illustrations/16s2100.png",
            }]}
          />
          <br />
          <TextBlock title="Vol. 3">
            <p>Educational illustrations. Paper, pencil</p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage src="/works/illustrations/17.png" alt="17" />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage src="/works/illustrations/18.png" alt="17" />
          </WorksFigure>
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="gala" year="2024" />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
