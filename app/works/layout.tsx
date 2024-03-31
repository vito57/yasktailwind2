import { Footer, PortfolioItem, Section } from "../components/server";
import { ArticleTopMenu, MobileNavBar, MobileArticleFooter } from "../components/client";
import data from "../works.json";
export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleTopMenu />
<MobileArticleFooter />
      {children}
      <Section id="moreworks">
        <h2 className="text-xl font-bold mb-8">More works</h2>
        <div className="grid gap-x-2 gap-y-2 md:gap-x-6 md:gap-y-6 md:grid-cols-4 grid-cols-2">
          {data.map((i) => {
            return (
              <PortfolioItem
                key={i.title}
                keyNum={i.path}
                href={i.path}
                imageSrc={i.cover.url}
                poster={i.cover.url}
                imageAlt={i.title}
                title={i.title}
                type={i.type}
                isVideo={!!i.cover.videoUrl}
                videoUrl={i.cover.videoUrl}
              />
            );
          })}
        </div>
      </Section>
      <Footer />
    </>
  );
}
