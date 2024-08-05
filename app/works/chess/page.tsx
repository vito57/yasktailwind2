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
  description: "Chess with artificial intelligence trained on the games of Mikhail Tal",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-white">
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
            <p>Chess with artificial intelligence trained on the games of Mikhail Tal. UI/UX MVP design.</p>

          

          </Text>
          <ArticleFigure >
            <BodyImage height={1980} src="/works/chess/overview.png" alt="Main" />
          </ArticleFigure>
          <Text>  <p>Focus on the game. The user starts playing immediately, there are no pre-settings, any settings can be made during the game. It is important.
              The layout is divided into 2 independent parts. The navigation bar is hidden without disturbing the player. It opens without blocking the game.</p></Text>
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/main_light.png" }}
            data2={{
              src: "/works/chess/zen_light.png",
            }}
          />
          <Text title="X-ray mode and tips">
            <p>The user can see the probability of an artificial intelligence move. The user can use the tips of the best move, according to artificial intelligence. The quantity of tips depends on the difficulty level that the user has chosen.</p>
          </Text>
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/x-ray.png" }}
            data2={{
              src: "/works/chess/tips.png",
            }}
          />

          <Text title="Dark and light themes">
            <p>Supporting dark and light theme</p>
          </Text>
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/main_light.png" }}
            data2={{
              src: "/works/chess/main_dark.png"

            }}
          />

          <Text title="Custom board colors"><p>The user can customize the color of the board</p></Text>
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/theme_light.png" }}
            data2={{
              src: "/works/chess/theme_dark.png"

            }}
          />
    
          <Text title="AI generated rooms">
            <p>The AI generated backgrounds and sounds allow you to play in a comfortable environment</p>
          </Text>
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/bg_light_1.png" }}
            data2={{
              src: "/works/chess/bg_light_2.png"

            }}
          />
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/bg_dark_1.png" }}
            data2={{
              src: "/works/chess/bg_dark_2.png"

            }}
          />

          <Text title="Gamification">
            <p>Analytics during the game helps to monitor the growth process. You can share your achievements and statistics.</p>
          </Text>
          <ArticleImageSection
           height={1060}
            data1={{ src: "/works/chess/win.png" }}
            data2={{
              src: "/works/chess/loose.png",
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
            <p>The game is fully adaptive and can be launched from any device.</p>
          </Text>
          <ArticleFigure>

            <BodyImage src="/works/chess/adaptive.png" width={1600} height={864} alt="Adaptive layout" />
          </ArticleFigure>
          <Text title="Game assets">
            <p>Pre made and ai driven color themes, and hand drawn chess pieces</p>
          </Text> 
          <ArticleImageSection
            height={1060}
            data1={{ src: "/works/chess/board_color.png" }}
            data2={{
              src: "/works/chess/chess_p.png",
            }}
          />


        </Section>

        <Section id="summary">
          <Text title="Summary">
            <Summary
              designer="vitaly"
              year="2024"
              client="UESMO/Sber"

            />
          </Text>
        </Section>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
