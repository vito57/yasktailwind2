import { Suspense } from "react";
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
  VideoSkeleton,
} from "../../components/server";
import { Video } from "@/app/components/video";

export const metadata = {
  title: "Ai Aides Concept Design",
  description: "Artificial intelligence aides",
};

const Page = () => {
  return (
    <AnimateLayout>
      <Article className="relative">
        <ArticleHeader className="bg-gray-100">
          <ArticleFigure>
            <BodyImage
              src="/works/aides/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Aides"
            />
          </ArticleFigure>
        </ArticleHeader>
        <Section id="about">
          <Text title="About">
            <p>
              Native IOS app design concept. The application allows you to
              create characters, customize them, have a chat with them. The task
              is to quickly make a design concept and test ideas for a native
              application with AI assistants. At the first stage, basic
              character mechanics and chat were implemented.
            </p>
          </Text>
          <br />
          <ArticleFigure figcaption="[fig 1] One of the versions of animation of transition to chat. Made in Origami Studio">
            <Suspense fallback={<VideoSkeleton width={1600} height={1200} />}>
              <Video
                width={1600}
                height={1200}
                fileName="aides-740Ol2XEnDjflhq8lcisNcAUO9C3o6.mp4"
              />
            </Suspense>
          </ArticleFigure>
          <br />
          <ArticleImageSection
            height={954}
            className="bg-ylightgrey"
            image1={{
              src: "/works/aides/aides-start.png",
              caption: "[fig 2] Main screen",
            }}
            image2={{
              src: "/works/aides/aides-start-black.png",
              caption: "[fig 3] Main screen. Dark mode",
            }}
          />
          <br />
          <ArticleImageSection
            height={954}
            className="bg-ylightgrey"
            image1={{
              src: "/works/aides/aides-context-notify.png",
              caption: "[fig 4] Context menu and notification",
            }}
            image2={{
              src: "/works/aides/aides-context-notify-black.png",
              caption: "[fig 5] Context menu and notification. Dark mode",
            }}
          />
          <br />
          <ArticleImageSection
            height={954}
            className="bg-ylightgrey"
            image1={{
              src: "/works/aides/aides-profile.png",
              caption: "[fig 6] Charecter page and user profile",
            }}
            image2={{
              src: "/works/aides/aides-profile-black.png",
              caption: "[fig 7] Character page and user profile. Dark mode",
            }}
          />
          <br />
          <ArticleImageSection
            height={954}
            className="bg-ylightgrey"
            image1={{
              src: "/works/aides/aides-list.png",
              caption: "[fig 8] Chats list",
            }}
            image2={{
              src: "/works/aides/aides-list-black.png",
              caption: "[fig 9] Chats list. Dark mode",
            }}
          />
          <br />
          <ArticleImageSection
            height={954}
            className="bg-ylightgrey"
            image1={{
              src: "/works/aides/aides-chat.png",
              caption: "[fig 10] Chat",
            }}
            image2={{
              src: "/works/aides/aides-chat-black.png",
              caption: "[fig 11] Chat. Dark mode",
            }}
          />
        </Section>
        <aside id="summary" className="container">
          <Text title="Summary">
            <Summary designer="vitaly" year="2025" client="SD" />
          </Text>
        </aside>
      </Article>
    </AnimateLayout>
  );
};

export default Page;
