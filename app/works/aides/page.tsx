import { Suspense } from "react";

import { Video } from "@/app/components/video";
import { Metadata } from "next";
import LayoutAnimated from "@/components/global/layoutanimated";
import WorksImage from "@/components/blocks/worksimage";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
import Section from "@/components/global/section";
import Article from "@/components/global/article";
export const metadata: Metadata = {
  title: "Ai Aides Concept Design",
  description: "Artificial intelligence aides",
};

const Page = () => {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-gray-100">
          <WorksFigure>
            <WorksImage
              src="/works/aides/cover.png"
              width={1120}
              height={416}
              className="bg-transparent w-full"
              alt="Aides"
            />
          </WorksFigure>
        </WorksHeader>
        <Section id="about">
          <TextBlock title="About">
            <p>
              Native IOS app design concept. The application allows you to
              create characters, customize them, have a chat with them. The task
              is to quickly make a design concept and test ideas for a native
              application with AI assistants. At the first stage, basic
              character mechanics and chat were implemented.
            </p>
          </TextBlock>
          <br />
          {/* <WorksFigure figcaption="[fig 1] One of the versions of animation of transition to chat. Made in Origami Studio">
            <Suspense fallback={<VideoSkeleton width={1600} height={1200} />}>
              <Video
                width={1600}
                height={1200}
                fileName="aides-740Ol2XEnDjflhq8lcisNcAUO9C3o6.mp4"
              />
            </Suspense>
          </WorksFigure>
          <br /> */}
          <WorksImageStack
            height={954}
            className="bg-ylightgrey"
            images={[{
              src: "/works/aides/aides-start.png",
              caption: "[fig 2] Main screen",
            }, {
              src: "/works/aides/aides-start-black.png",
              caption: "[fig 3] Main screen. Dark mode",
            }]}
          />
          <br />
          <WorksImageStack
            height={954}
            className="bg-ylightgrey"
            images={[{
              src: "/works/aides/aides-context-notify.png",
              caption: "[fig 4] Context menu and notification",
            }, {
              src: "/works/aides/aides-context-notify-black.png",
              caption: "[fig 5] Context menu and notification. Dark mode",
            }]}
          />
          <br />
          <WorksImageStack
            height={954}
            className="bg-ylightgrey"
            images={[{
              src: "/works/aides/aides-profile.png",
              caption: "[fig 6] Charecter page and user profile",
            }, {
              src: "/works/aides/aides-profile-black.png",
              caption: "[fig 7] Character page and user profile. Dark mode",
            }]}
          />
          <br />
          <WorksImageStack
            height={954}
            className="bg-ylightgrey"
            images={[{
              src: "/works/aides/aides-list.png",
              caption: "[fig 8] Chats list",
            }, {
              src: "/works/aides/aides-list-black.png",
              caption: "[fig 9] Chats list. Dark mode",
            }]}
          />
          <br />
          <WorksImageStack
            height={954}
            className="bg-ylightgrey"
            images={[{
              src: "/works/aides/aides-chat.png",
              caption: "[fig 10] Chat",
            }, {
              src: "/works/aides/aides-chat-black.png",
              caption: "[fig 11] Chat. Dark mode",
            }]}
          />
          <br />
          <TextBlock title="Summary">
            <WorksSummary designer="vitaly" year="2025" client="SD" />
          </TextBlock>
        </Section>

      </Article>
    </LayoutAnimated>
  );
};

export default Page;
