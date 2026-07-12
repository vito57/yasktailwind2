
import Link from "next/link";
import Image from "next/image";
import users from "../../users.json";
import allWorks from "../../works.json";
import { notFound } from "next/navigation";
import  ArticleMainMenu  from "@/components/global/articlemainmenu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import TextBlock  from "@/components/global/textblock";
import MainFooter from "@/components/global/mainfooter";
import  LayoutAnimated  from "@/components/global/layoutanimated";
import  ThumbnailFeed  from "@/components/global/thumbnailfeed";
import { Metadata } from "next/types";
import  MobileNav  from "@/components/global/mobilenav";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

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
      <LayoutAnimated className="container typeset typeset-article">
        <header className="text-center relative rounded-xl pt-4">
          <Image
            className="inline-block mb-2 rounded-full"
            src={user.avatar}
            width={80}
            height={80}
            alt={user.name}
          />
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <Link href={`mailto:${user.email}`} className={buttonVariants({ variant: "link" })}>
            {user.email}
          </Link>

        </header>
        <div className="flex py-2 md:py-4 gap-2 items-center justify-center w-fit m-auto top-0 sticky z-20 mb-10">
          {user.resume ? (
            <Link className={buttonVariants({ variant: "secondary" })} href={user.resume}>
              <FileText /> Resume.pdf
            </Link>
          ) : (
            false
          )}

          {user.social.map((i) => (
            <Link key={i.url} href={i.url}>
              <Image
                src={i.image_path}
                width={36}
                height={36}
                className="rounded-full transition-transform hover:scale-105"
                alt={i.name}
              />
            </Link>
          ))}
        </div>
        <TextBlock title="About">
          <p>{user.about}</p>
        </TextBlock>
        <br />
        <TextBlock title="Top skils">
          <div className="flex gap-1 flex-wrap">
            {user["top skills"]?.map((i) => (
              <Link key={i.name} className={buttonVariants({ variant: "secondary", size: "sm" })} href={i.href}>
                {i.name}  {i.badge && <Kbd data-icon="inline-end" className="translate-x-0.5">{i.badge}
                </Kbd>}
              </Link>
            ))}
          </div>
        </TextBlock>
        <br />
        <TextBlock title="Tools stack">
          <div className="flex gap-1 flex-wrap">
            {user.tools?.map((i) => (
              <Link key={i.name} className={buttonVariants({ variant: "secondary", size: "sm" })} href={i.href}>
                {i.name}  {i.badge && <Kbd data-icon="inline-end" className="translate-x-0.5">{i.badge}
                </Kbd>}
              </Link>
            ))}
          </div>
        </TextBlock>
        <br />
        <TextBlock title="Experience">
          <dl className="mb-8">
            {user.experience.map((i) => (
              <div key={i.date}>
                <dt key={i.placeLink} className="font-medium">
                  {i.position} at{" "}
                  <Link href={i.placeLink}>
                    {i.place}
                  </Link>
                </dt>
                <dd key={i.date} className="mb-8">
                  <code>{i.date}</code>
                  <p>
                    <span className="font-medium">Responsibilities:</span> {i.responsible}
                  </p>
                 
                  {i.achievements && (
                    <p>
                      <span className="font-medium">Achivments:</span> {i.achievements}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </TextBlock>
        <br />
        <TextBlock title="Projects">
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
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
        </TextBlock>
        <br />
        <TextBlock title="Social links">
          <div className="flex gap-4 flex-wrap">
            {user.social.map((i) => (
              <Link key={i.url} className="ylink" href={i.url}>
                {i.name}
              </Link>
            ))}
          </div>
        </TextBlock>
        <br />
        {/* {user.awards && (
          <Text title="Awards">
            <div className="flex flex-wrap">
              {user.awards.map((i) => (
                <BadgeButton key={i.name} href={i.href}>
                  {i.name}
                </BadgeButton>
              ))}
            </div>
          </Text>
        )} */}

        <TextBlock title="Education">
          <p>{user.education}</p>
        </TextBlock>
        <br />
        {user.courses && (
          <>
            <TextBlock title="Courses">
              <ul>
                {user.courses.map((i) => {
                  return <li key={i}>{i}</li>;
                })}
              </ul>
            </TextBlock>
            <br />
          </>
        )}
        {user.languages && (
          <>
            <TextBlock title="Languages">
              {user.languages.map((i) => {
                return <span key={i}>{i}{" "}</span>;
              })}
            </TextBlock>
            <br />
          </>
        )}
        {user.learn && (
          <>
            <TextBlock title="Learning goals">
              {user.learn.map((i) => {
                return <span key={i.name}>
                  {i.name}{" "}
                </span>;
              })}
            </TextBlock>
            <br />
          </>
        )}
      </LayoutAnimated>
    </>
  );
}
