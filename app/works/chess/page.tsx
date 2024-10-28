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
} from "../../components/server";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Mikhail Tal Chess",
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
              Chess with artificial intelligence trained on the games of Mikhail
              Tal. UI/UX MVP design.
            </p>
          </Text>
          {/* <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/overview.png" }}
            data2={{
              src: "/works/chess/overview-dark.png",
            }}
          /> */}
          <ArticleFigure>
            <BodyImage
              height={1980}
              src="/works/chess/overview.png"
              alt="Main"
            />
          </ArticleFigure>
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
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/1.png", caption: "Main layout" }}
            data2={{
              src: "/works/chess/2.png",
              caption: "Zen mode",
            }}
          />
          <Text title="X-ray mode and tips">
            <p>
              The user can see the probability of an artificial intelligence
              move. The user can use the tips of the best move, according to
              artificial intelligence. The quantity of tips depends on the
              difficulty level that the user has chosen.
            </p>
          </Text>
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/3.png", caption: "Tips" }}
            data2={{
              src: "/works/chess/4.png",
              caption: "Ai assist",
            }}
          />

          <Text title="Dark and light themes">
            <p>Supporting dark and light theme</p>
          </Text>
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/5.png" }}
            data2={{
              src: "/works/chess/6.png",
            }}
          />

          <Text title="Custom board colors">
            <p>The user can customize the color of the board</p>
          </Text>
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/7.png" }}
            data2={{
              src: "/works/chess/8.png",
            }}
          />

          <Text title="AI generated rooms">
            <p>
              The AI generated backgrounds and sounds allow you to play in a
              comfortable environment
            </p>
          </Text>
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/9.png" }}
            data2={{
              src: "/works/chess/10.png",
            }}
          />
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/11.png" }}
            data2={{
              src: "/works/chess/12.png",
            }}
          />

          <Text title="Gamification">
            <p>
              Analytics during the game helps to monitor the growth process. You
              can share your achievements and statistics.
            </p>
          </Text>
          <ArticleImageSection
            height={924}
            className="bg-transparent"
            data1={{ src: "/works/chess/13.png" }}
            data2={{
              src: "/works/chess/14.png",
            }}
          />
          {/* </Section>
        <Section fluid>
          <ArticleFigure>
            <BodyImage src="/works/chess/overview.png" width={3200} height={1980} alt="Chess overview" />
          </ArticleFigure>
        </Section>
        <Section> */}

          <Text title="Adaptive design">
            <p>
              The game is fully adaptive and can be launched from any device.
            </p>
          </Text>
          <ArticleFigure>
            <BodyImage
              src="/works/chess/15.png"
              width={1704}
              height={824}
              className="bg-transparent"
              alt="Adaptive layout"
            />
          </ArticleFigure>
          <Text title="Game assets">
            <p>
              Pre made and ai driven color themes, and hand drawn chess pieces
            </p>
          </Text>
          <ArticleImageSection
            height={924}
            data1={{ src: "/works/chess/16.png" }}
            data2={{
              src: "/works/chess/17.png",
            }}
          />
        </Section>

        <Section id="summary">
          <Text title="Summary">
            <Summary designer="vitaly" year="2024" client="UESMO/Sber" />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
