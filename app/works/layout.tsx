
import data from "../works.json";
import  ArticleMainMenu  from "@/components/global/articlemainmenu";
import  MobileNav  from "@/components/global/mobilenav";
import  ThumbnailFeed  from "@/components/global/thumbnailfeed";
import MainFooter from "@/components/global/mainfooter";
import Section from "@/components/global/section";
export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleMainMenu />
      <MobileNav />
      <div className="typeset typeset-article">{children}</div>
      <Section id="moreworks">
        <h2 className="text-xl font-bold mb-8">More works</h2>
        <div className="grid gap-2 md:gap-5  md:grid-cols-4 grid-cols-2">
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
      </Section>
    
    </>
  );
}
