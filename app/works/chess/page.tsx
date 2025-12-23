import Link from "next/link";
import {
  Article,
  AnimateLayout,
  Text,
  ArticleFigure,
  Section,
  ArticleImageSection,
  ArticleHeader,
  BodyImage,
  Summary,
  ArticleImageGrid,
} from "../../components/server";
import { Metadata } from "next";

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
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-[#4D7CFE]">
          <ArticleFigure>
            <BodyImage
              src="/works/chess/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Mikhail Tal Chess"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              UI/UX design of Chess with artificial intelligence, trained on the
              games of{" "}
              <Link
                className="ylink"
                href="https://en.wikipedia.org/wiki/Mikhail_Tal"
              >
                Mikhail Tal
              </Link>
            </p>
          </Text>
          <br />

          <ArticleImageSection
            className="bg-ylightgrey"
            image1={{
              src: "/works/chess/overview.png",
              caption: "[fig 0] Light mode",
            }}
            image2={{
              src: "/works/chess/overview-dark.webp",
              caption: "[fig 1] Zen mode",
            }}
          />
          <br />
          <Text>
            {" "}
            <p>
              Focus on the game. The user starts playing immediately, there are
              no pre-settings, any settings can be made during the game. It is
              important. The layout is divided into 2 independent parts. The
              navigation bar is hidden without disturbing the player. It opens
              without blocking the game.
            </p>
          </Text>
          <br />
          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{
              src: "/works/chess/1.png",
              caption: "[fig 2] Sidebar open",
            }}
            image2={{
              src: "/works/chess/2.png",
              caption: "[fig 3] Sidebar closed",
            }}
          />
          <br />

          <Text title="X-ray mode and tips">
            <p>
              The user can see the probability of an artificial intelligence
              move. The user can use the tips of the best move, according to
              artificial intelligence. The quantity of tips depends on the
              difficulty level that the user has chosen.
            </p>
          </Text>
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/3.png", caption: "[fig 3] Tips" }}
            image2={{
              src: "/works/chess/4.png",
              caption: "[fig 4] AI assist",
            }}
          />
          <br />
          <Text title="Dark and light themes">
            <p>Supporting dark and light theme</p>
          </Text>
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/5.png", caption: "[fig 5]" }}
            image2={{
              src: "/works/chess/6.png",
              caption: "[fig 6]",
            }}
          />
          <br />
          <Text title="Custom board colors">
            <p>The user can customize the color of the board</p>
          </Text>
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/7.png", caption: "[fig 7]" }}
            image2={{
              src: "/works/chess/8.png",
              caption: "[fig 8]",
            }}
          />
          <br />
          <Text title="AI generated rooms">
            <p>
              The AI generated backgrounds and sounds allow you to play in a
              comfortable environment
            </p>
          </Text>
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/9.png", caption: "[fig 9]" }}
            image2={{
              src: "/works/chess/10.png",
              caption: "[fig 10]",
            }}
          />
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/11.png", caption: "[fig 11]" }}
            image2={{
              src: "/works/chess/12.png",
              caption: "[fig 12]",
            }}
          />
          <br />
          <Text title="Gamification">
            <p>
              Analytics during the game helps to monitor the growth process. You
              can share your achievements and statistics.
            </p>
          </Text>
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/13.png", caption: "[fig 13]" }}
            image2={{
              src: "/works/chess/14.png",
              caption: "[fig 14]",
            }}
          />
          <br />
          <Text title="Adaptive design">
            <p>
              The game is fully adaptive and can be launched from any device.
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="[fig 15] Adaptive layout">
            <BodyImage
              src="/works/chess/15.png"
              width={1704}
              height={824}
              className="bg-ylightgrey"
              alt="[fig 15] Adaptive layout"
            />
          </ArticleFigure>
          <br />
          <Text title="Game assets">
            <p>
              Pre made and ai driven color themes, and hand drawn chess pieces
            </p>
          </Text>
          <br />

          <ArticleImageSection
            height={924}
            width={1464}
            className="bg-ylightgrey"
            image1={{ src: "/works/chess/16.png", caption: "[fig 16]" }}
            image2={{
              src: "/works/chess/17.png",
              caption: "[fig 17]",
            }}
          />
        </Section>

        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" client="UESMO/Sber" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
