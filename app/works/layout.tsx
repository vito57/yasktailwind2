
import data from "../works.json";
import { ArticleMainMenu } from "@/components/regions/articlemainmenu";
import { MobileNav } from "@/components/blocks/mobilenav";
import { ThumbnailFeed } from "@/components/blocks/thumbnailfeed";
import MainFooter from "@/components/regions/mainfooter";
export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleMainMenu />
      <MobileNav />
      {children}
      <section id="moreworks" className="container">
        <h2 className="text-xl font-bold mb-8">More works</h2>
        <div className="grid gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 md:grid-cols-4 grid-cols-2">
          {data.map((i) => {
            return (
              <ThumbnailFeed
                key={i.title}
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
      </section>
      <MainFooter />
    </>
  );
}
