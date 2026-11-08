import UserTextBlock from "@/components/user/usertextblock";
import Link from "next/link";
import Image from "next/image";
import users from "../../../data/users.json";
import allWorks from "../../../data/works.json";
import { notFound } from "next/navigation";
import ArticleMainMenu from "@/components/global/articlemainmenu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import TextBlock from "@/components/global/textblock";
import MainFooter from "@/components/global/mainfooter";
import LayoutAnimated from "@/components/global/layoutanimated";
import ThumbnailFeed from "@/components/global/thumbnailfeed";
import { Metadata } from "next/types";
import MobileNav from "@/components/global/mobilenav";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiDribbbleFill,
  RiDribbbleLine,
  RiLinkedinLine,
  RiGithubLine,
} from "@remixicon/react";

export const metadata: Metadata = {
  title: "About us",
  description: "We design websites and apps",
};
export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const user = users.find((i) => i.path === `/${params.slug}`);
  const userWorks = allWorks.filter((i) => i.by.includes(params.slug));
  if (!user) {
    notFound();
  }
  return (
    <>
      <ArticleMainMenu />
      <MobileNav />
      <LayoutAnimated className="container ">
        <header className="flex flex-col items-center gap-2 relative pt-10">
          <Avatar
            className={
              "size-20  p-0.5 bg-linear-[90deg,#C8BFFF,#A8D8F0,#D9F66F,#FFB899,#F5F2EB]"
            }
          >
            <AvatarImage
              className={"bg-primary-foreground"}
              src={user.avatar}
              alt="Y"
            ></AvatarImage>
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-display text-3xl text-center font-light">
              {user.name} Yask
            </h1>
            <p className="m-0 text-center text-sm text-amber-400">
              {user.occupation}
            </p>
          </div>
        </header>
        <div className="flex py-2 md:py-4 gap-3 items-center justify-center w-fit m-auto top-0 sticky z-20 mb-10 ">
          {user.resume ? (
            <Button
              render={<Link href={user.resume}></Link>}
              nativeButton={false}
              variant={"secondary"}
            >
              <FileText /> Resume.pdf
            </Button>
          ) : (
            false
          )}

          {user.social.map((i) => (
            <Link
              key={i.url}
              className={buttonVariants({ size: "icon" })}
              href={i.url}
            >
              {i.name === "LinkedIn" ? (
                <RiLinkedinLine className="text-blue-300" />
              ) : i.name === "Dribbble" ? (
                <RiDribbbleLine className="text-orange-300" />
              ) : (
                <RiGithubLine className="text-lime-300" />
              )}
            </Link>
          ))}
        </div>
        <UserTextBlock>
          <p className="text-justify">{user.about}</p>
        </UserTextBlock>
        <br />
        <UserTextBlock title="Top skils">
          <div className="flex gap-1 flex-wrap">
            {user["top skills"]?.map((i) => (
              <Link
                key={i.name}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
                href={i.href}
                role="button"
              >
                {i.name}{" "}
                {i.badge && (
                  <Kbd data-icon="inline-end" className="translate-x-0.5">
                    {i.badge}
                  </Kbd>
                )}
              </Link>
            ))}
          </div>
        </UserTextBlock>
        <br />
        <UserTextBlock title="Tools stack">
          <div className="flex gap-1 flex-wrap">
            {user.tools?.map((i) => (
              <Link
                key={i.name}
                role="button"
                className={buttonVariants({ variant: "secondary", size: "sm" })}
                href={i.href}
              >
                {i.name}{" "}
                {i.badge && (
                  <Kbd data-icon="inline-end" className="translate-x-0.5">
                    {i.badge}
                  </Kbd>
                )}
              </Link>
            ))}
          </div>
        </UserTextBlock>
        <br />
        <UserTextBlock title="Work Experience">
          {user.experience.map((i) => (
            <div key={i.date} className="flex flex-col gap-3 mb-6">
              <div key={i.placeLink} className="flex gap-3 items-center">
                <Avatar className="size-13">
                  <AvatarImage src={i.logopath} alt="YW" />
                  <AvatarFallback>YW</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full">
                  <p className="flex justify-between">
                    {i.place}{" "}
                    <span className="font-mono text-sm text-primary/40">
                      {i.date}
                    </span>
                  </p>
                  <p className="text-xs ">{i.position}</p>
                </div>
              </div>
              <div key={i.date}>
                <p className="text-justify text-pretty">{i.responsible}</p>
                {/* {i.achievements && (
                    <p>
                      <span className="font-medium">Achivments:</span>{" "}
                      {i.achievements}
                    </p>
                  )} */}
              </div>
            </div>
          ))}
        </UserTextBlock>
        <br />
        <UserTextBlock title="Projects">
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 grid-cols-2">
            {userWorks.map((i) => {
              return (
                <ThumbnailFeed
                  key={i.path}
                  href={i.path}
                  imageSrc={i.cover}
                  imageAlt={i.title}
                  title={i.title}
                />
              );
            })}
          </div>
        </UserTextBlock>
        <br />
        <UserTextBlock title="Social links">
          <div className="flex gap-2 flex-wrap">
            {user.social.map((i) => (
              <Link
                key={i.url}
                className={buttonVariants({ variant: "secondary" })}
                href={i.url}
              >
                {i.name === "LinkedIn" ? (
                  <RiLinkedinFill
                    data-icon="inline-start"
                    style={{ color: "#0A66C2" }}
                  />
                ) : i.name === "Dribbble" ? (
                  <RiDribbbleFill
                    data-icon="inline-start"
                    style={{ color: "#EA4C89" }}
                  />
                ) : (
                  <RiGithubFill
                    data-icon="inline-start"
                    style={{ color: "#171AFF" }}
                  />
                )}{" "}
                {i.name}
              </Link>
            ))}
          </div>
        </UserTextBlock>
        <br />
        {user.awards && (
          <UserTextBlock title="Awards">
            <div className="flex flex-wrap gap-2">
              {user.awards.map((i, f) => (
                <Button variant={"secondary"} key={f}>
                  <Image
                    src="/about/runet.png"
                    alt="Award"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  {i.name}
                </Button>
              ))}
            </div>
          </UserTextBlock>
        )}
        <br />
        {/* <UserTextBlock title="Education">
          <p>{user.education}</p>
        </UserTextBlock>
        <br /> */}
        {user.courses && (
          <>
            <UserTextBlock title="Courses">
              <ul className="list-none">
                {user.courses.map((i) => {
                  return <li key={i}>{i}</li>;
                })}
              </ul>
            </UserTextBlock>
            <br />
          </>
        )}
        {/* {user.languages && (
          <>
            <UserTextBlock title="Languages">
              {user.languages.map((i) => {
                return <span key={i}>{i} </span>;
              })}
            </UserTextBlock>
            <br />
          </>
        )} */}
        {/* {user.learn && (
          <>
            <UserTextBlock title="Learning goals">
              {user.learn.map((i) => {
                return <span key={i.name}>{i.name} </span>;
              })}
            </UserTextBlock>
            <br />
          </>
        )} */}
      </LayoutAnimated>
    </>
  );
}
