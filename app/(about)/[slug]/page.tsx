import {
  Button,
  Text,
  Badge,
  PortfolioItem,
  Footer,
  AnimateLayout,
} from "@/app/components/server";
import { ArticleTopMenu } from "@/app/components/client";
import Link from "next/link";
import Image from "next/image";
import users from "../../users.json";
import { notFound } from "next/navigation";
export const metadata = {
  title: "About us",
  description: "We design websites and apps",
};
export default function Page({ params }: { params: { slug: string } }) {
  const user = users.find((i) => i.path === `/${params.slug}`);
  if (!user) {
    notFound();
  }
  return (
    <>
      <ArticleTopMenu title={`Hi i am ${user.name}`} />
      <AnimateLayout className="container">
        <header className="text-center relative rounded-xl pt-10">
          <Image
            className="inline-block mb-2 rounded-full"
            src={user.avatar}
            width={80}
            height={80}
            alt={user.name}
          />
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <Link href={`mailto:${user.email}`} className="ylink text-base">
            {user.email}
          </Link>
          <blockquote className="absolute top-0 text-sm right-0 italic text-left max-w-xs">
            {user.tagline} Feel free to{" "}
            <Link href={user.email} className="ylink ">
              drop me a line
            </Link>
            !
          </blockquote>
        </header>
        <div className="flex py-4 gap-2 items-center justify-center top-0 sticky z-20 mb-10">
          {user.resume ? (
            <Button colorClass="bg-ygrey hover:bg-[#C2CBD6]" path="/">
              Resume.pdf
            </Button>
          ) : (
            false
          )}

          {user.social.map((i) => (
            <Link href={i.url}>
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
            {user["top skills"].map((i) => (
              <Badge>{i}</Badge>
            ))}
          </div>
        </Text>
        <Text title="Tools stack">
          <div className="flex gap-1 flex-wrap">
            {user.tools.map((i) => (
              <Badge>{i}</Badge>
            ))}
          </div>
        </Text>
        <Text title="Experience">
          <dl className="mb-8">
            {user.experience.map((i) => (
              <>
                <dt className="font-medium">
                  {i.position} at{" "}
                  <Link href={i.placeLink} className="ylink">
                    {i.place}
                  </Link>
                </dt>
                <dd className="mb-8">
                  <span className="italic">{i.date}</span> <br />
                  <span>
                    <span className="font-medium">Responciable:</span>{" "}
                    {i.responsible}
                  </span>
                  <br />
                  <span>
                    <span className="font-medium">Achivments:</span>{" "}
                    {i.achievements}
                  </span>
                </dd>
              </>
            ))}
          </dl>
        </Text>
        <Text title="Projects">
          <div className="grid gap-x-8 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
            {user.projects.map((i) => {
              return (
                <PortfolioItem
                  keyNum={i.path}
                  href={i.path}
                  imageSrc={i.cover}
                  imageAlt={i.title}
                  title={i.title}
                  type={i.type}
                />
              );
            })}
          </div>
        </Text>
        <Text title="Awards">
          <div className="flex gap-2">
            {user.awards.map((i) => (
              <Badge>🏆 {i}</Badge>
            ))}
          </div>
        </Text>
        {user.people ? (
          <Text title="People who inspire me">
            {user.people.map((i) => (
              <Badge>{i}</Badge>
            ))}
          </Text>
        ) : null}
        <Text title="Education">
          <p>{user.education}</p>
        </Text>
        <Text title="Courses">
          <ul>
            <li>
              {" "}
              <Link className="ylink" href="/">
                State University of Economics and Trade, Adverising, Oryol 2006
              </Link>
            </li>
            <li>
              {" "}
              <Link className="ylink" href="/">
                State University of Economics and Trade, Adverising, Oryol 2006
              </Link>
            </li>
          </ul>
        </Text>
        <Footer />
      </AnimateLayout>
    </>
  );
}
