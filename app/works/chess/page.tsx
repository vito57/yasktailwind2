import Link from "next/link";
import { Metadata } from "next";
import LayoutAnimated from "@/components/global/layoutanimated";
import Article from "@/components/global/article";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import Section from "@/components/global/section";
import WorksSummary from "@/components/blocks/workssummary";
export const metadata: Metadata = {
  title: "Mikhail Tal Chess",
  openGraph: {
    title: "Mikhail Tal Chess",
  },
  description:
    "Chess with artificial intelligence trained on the games of Mikhail Tal",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksFigure>
            <WorksImage
              src="/works/chess/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Mikhail Tal Chess"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              UI/UX design of Chess with artificial intelligence, trained on the
              games of{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Mikhail_Tal"
              >
                Mikhail Tal
              </Link>
            </p>
          </TextBlock>
          <br />

          <WorksImageStack
            className="bg-ylightgrey"
            images={[{
              src: "/works/chess/overview.png",
              caption: "[fig 0] Light mode",
            }, {
              src: "/works/chess/overview-dark.webp",
              caption: "[fig 1] Zen mode",
            }]}

          />
          <br />
          <TextBlock>
            {" "}
            <p>
              Focus on the game. The user starts playing immediately, there are
              no pre-settings, any settings can be made during the game. It is
              important. The layout is divided into 2 independent parts. The
              navigation bar is hidden without disturbing the player. It opens
              without blocking the game.
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{
              src: "/works/chess/1.png",
              caption: "[fig 2] Sidebar open",
            }, {
              src: "/works/chess/2.png",
              caption: "[fig 3] Sidebar closed",
            }]}

          />
          <br />

          <TextBlock title="X-ray mode and tips">
            <p>
              The user can see the probability of an artificial intelligence
              move. The user can use the tips of the best move, according to
              artificial intelligence. The quantity of tips depends on the
              difficulty level that the user has chosen.
            </p>
          </TextBlock>
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/3.png", caption: "[fig 3] Tips" }, {
              src: "/works/chess/4.png",
              caption: "[fig 4] AI assist",
            }]}
          />
          <br />
          <TextBlock title="Dark and light themes">
            <p>Supporting dark and light theme</p>
          </TextBlock>
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/5.png", caption: "[fig 5]" }, {
              src: "/works/chess/6.png",
              caption: "[fig 6]",
            }]}
          />
          <br />
          <TextBlock title="Custom board colors">
            <p>The user can customize the color of the board</p>
          </TextBlock>
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/7.png", caption: "[fig 7]" }, {
              src: "/works/chess/8.png",
              caption: "[fig 8]",
            }]}
          />
          <br />
          <TextBlock title="AI generated rooms">
            <p>
              The AI generated backgrounds and sounds allow you to play in a
              comfortable environment
            </p>
          </TextBlock>
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/9.png", caption: "[fig 9]" }, {
              src: "/works/chess/10.png",
              caption: "[fig 10]",
            }]}
          />
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/11.png", caption: "[fig 11]" }, {
              src: "/works/chess/12.png",
              caption: "[fig 12]",
            }]}
          />
          <br />
          <TextBlock title="Gamification">
            <p>
              Analytics during the game helps to monitor the growth process. You
              can share your achievements and statistics.
            </p>
          </TextBlock>
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/13.png", caption: "[fig 13]" }, {
              src: "/works/chess/14.png",
              caption: "[fig 14]",
            }]}
          />
          <br />
          <TextBlock title="Adaptive design">
            <p>
              The game is fully adaptive and can be launched from any device.
            </p>
          </TextBlock>
          <br />
          <WorksFigure figcaption="[fig 15] Adaptive layout">
            <WorksImage
              src="/works/chess/15.png"
              width={1704}
              height={824}
              className="bg-ylightgrey"
              alt="[fig 15] Adaptive layout"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Game assets">
            <p>
              Pre made and ai driven color themes, and hand drawn chess pieces
            </p>
          </TextBlock>
          <br />

          <WorksImageStack
            height={924}
            width={1464}
            className="bg-ylightgrey"
            images={[{ src: "/works/chess/16.png", caption: "[fig 16]" }, {
              src: "/works/chess/17.png",
              caption: "[fig 17]",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2024" client="UESMO/Sber" />
          </TextBlock>
        </Section>


      </Article>
    </LayoutAnimated>
  );
};

export default Page;
