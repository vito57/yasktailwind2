import {
  Button,
  Text,
  BadgeButton,
  PortfolioItem,
  Footer,
  AnimateLayout,
} from "@/app/components/server";
import { ArticleTopMenu, MobileArticleFooter } from "@/app/components/client";
import Link from "next/link";
import Image from "next/image";
import users from "../../users.json";
import allWorks from "../../works.json";
import { notFound } from "next/navigation";
export const metadata = {
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
      <ArticleTopMenu title={`Hi i am ${user.name}`} />
      <MobileArticleFooter />
      <AnimateLayout className="container">
        <header className="text-center relative rounded-xl pt-4">
          <Image
            className="inline-block mb-2 rounded-full"
            src={user.avatar}
            width={80}
            height={80}
            alt={user.name}
          />
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <Link href={`mailto:${user.email}`} className="ylink text-base">
            {user.email}
          </Link>
          <blockquote className="absolute hidden md:block top-0 text-base right-0 italic text-left max-w-xs">
            {user.tagline} Feel free to{" "}
            <Link href={user.email} className="ylink ">
              drop me a line
            </Link>
            !
          </blockquote>
        </header>
        <div className="flex py-2 md:py-4 gap-2 items-center justify-center w-fit m-auto top-0 sticky z-20 mb-10">
          {user.resume ? (
            <Button className="ybutton secondary" path={user.resume}>
              Resume.pdf
            </Button>
          ) : (
            false
          )}

          {user.social.map((i) => (
            <Link key={i.url} href={i.url}>
              <Image
                src={i.image_path}
                width={40}
                height={40}
                className="rounded-full transition-transform hover:scale-105"
                alt={i.name}
              />
            </Link>
          ))}
        </div>
        <Text title="About">
          <p>{user.about}</p>
        </Text>
        <Text title="Top skils">
          <div className="flex gap-1 flex-wrap">
            {user["top skills"]?.map((i) => (
              <BadgeButton key={i.name} href={i.href} badge={i.badge}>
                {i.name}
              </BadgeButton>
            ))}
          </div>
        </Text>
        <Text title="Tools stack">
          <div className="flex gap-1 flex-wrap">
            {/* {user.tools.map((i) => (
              <Badge key={i}>{i}</Badge>
            ))} */}
            {user.tools?.map((i) => (
              <BadgeButton key={i.name} href={i.href} badge={i.badge}>
                {i.name}
              </BadgeButton>
            ))}
          </div>
        </Text>
        <Text title="Experience">
          <dl className="mb-8">
            {user.experience.map((i) => (
              <div key={i.date}>
                <dt key={i.placeLink} className="font-bold">
                  {i.position} at{" "}
                  <Link href={i.placeLink} className="ylink">
                    {i.place}
                  </Link>
                </dt>
                <dd key={i.date} className="mb-8">
                  <p>{i.date}</p>
                  <p>
                    <span className="font-medium">Responsibilities:</span>{" "}
                    {i.responsible}
                  </p>
                  {i.achievements && (
                    <p>
                      <span className="font-medium">Achivments:</span>{" "}
                      {i.achievements}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Text>
        <Text title="Projects">
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
            {userWorks.map((i) => {
              return (
                <PortfolioItem
                  key={i.path}
                  href={i.path}
                  imageSrc={i.cover.url}
                  imageAlt={i.title}
                  title={i.title}
                  poster={i.cover.url}
                  isVideo={!!i.cover.videoUrl}
                  videoUrl={i.cover.videoUrl}
                />
              );
            })}
          </div>
        </Text>
        <Text title="Social links">
          <div className="flex gap-4 flex-wrap">
            {user.social.map((i) => (
              <Link key={i.url} className="ylink" href={i.url}>
                {i.name}
              </Link>
            ))}
          </div>
        </Text>
        {user.awards && (
          <Text title="Awards">
            <div className="flex flex-wrap">
              {user.awards.map((i) => (
                <BadgeButton key={i}>{i}</BadgeButton>
              ))}
            </div>
          </Text>
        )}

        <Text title="Education">
          <p>{user.education}</p>
        </Text>
        {user.courses && (
          <Text title="Courses">
            <ul>
              {user.courses.map((i) => {
                return <li key={i}>{i}</li>;
              })}
            </ul>
          </Text>
        )}
        {user.learn && (
          <Text title="Learning goals">
            {user.learn.map((i) => {
              return <BadgeButton key={i}>{i}</BadgeButton>;
            })}
          </Text>
        )}
        <Footer />
      </AnimateLayout>
    </>
  );
}
