import {
  Button,
  Text,
  SpanButton,
  Footer,
  AnimateLayout,
  FeedItem,
} from "../../components/server";
import { ArticleTopMenu, MobileArticleFooter } from "../../components/client";
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
          <h1 className="text-3xl font-bold">{user.name} Yask</h1>
          <Link href={`mailto:${user.email}`} className="ylink text-base">
            {user.email}
          </Link>
          {/* <blockquote className="absolute hidden md:block top-0 text-base right-0 italic text-left max-w-xs">
            {user.tagline} Feel free to{" "}
            <Link href={user.email} className="ylink ">
              drop me a line
            </Link>
            !
          </blockquote> */}
        </header>
        <div className="flex py-2 md:py-4 gap-2 items-center justify-center w-fit m-auto top-0 sticky z-20 mb-10">
          {user.resume ? (
            <Button className="bg-ytextdark text-ylightblue" path={user.resume}>
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
        <br />
        <Text title="Top skils">
          <div className="flex gap-1 flex-wrap">
            {user["top skills"]?.map((i) => (
              <SpanButton key={i.name} href={i.href} badge={i.badge}>
                {i.name}
              </SpanButton>
            ))}
          </div>
        </Text>
        <br />
        <Text title="Tools stack">
          <div className="flex gap-1 flex-wrap">
            {user.tools?.map((i) => (
              <SpanButton key={i.name} href={i.href} badge={i.badge}>
                {i.name}
              </SpanButton>
            ))}
          </div>
        </Text>
        <br />
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
                  <time>{i.date}</time>
                  <p>
                    <em>Responsibilities:</em> {i.responsible}
                  </p>
                  {i.achievements && (
                    <p>
                      <em>Achivments:</em> {i.achievements}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Text>
        <br />
        <Text title="Projects">
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
            {userWorks.map((i) => {
              return (
                <FeedItem
                  key={i.path}
                  href={i.path}
                  imageSrc={i.cover}
                  imageAlt={i.title}
                  title={i.title}
                />
              );
            })}
          </div>
        </Text>
        <br />
        <Text title="Social links">
          <div className="flex gap-4 flex-wrap">
            {user.social.map((i) => (
              <Link key={i.url} className="ylink" href={i.url}>
                {i.name}
              </Link>
            ))}
          </div>
        </Text>
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

        <Text title="Education">
          <p>{user.education}</p>
        </Text>
        <br />
        {user.courses && (
          <>
            <Text title="Courses">
              <ul>
                {user.courses.map((i) => {
                  return <li key={i}>{i}</li>;
                })}
              </ul>
            </Text>
            <br />
          </>
        )}
        {user.languages && (
          <>
            <Text title="Languages">
              {user.languages.map((i) => {
                return <span key={i}>{i} </span>;
              })}
            </Text>
            <br />
          </>
        )}
        {user.learn && (
          <>
            <Text title="Learning goals">
              {user.learn.map((i) => {
                return <SpanButton key={i.name}>{i.name}</SpanButton>;
              })}
            </Text>
            <br />
          </>
        )}
        <Footer />
      </AnimateLayout>
    </>
  );
}
