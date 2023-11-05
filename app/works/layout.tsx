import { Footer, PortfolioItem } from "../components/server";
import { ArticleTopMenu, MobileNavBar } from "../components/client";
import data from "../works.json";
export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleTopMenu />

      {children}
      <div className="container px-4">
        <h2 className="text-xl font-medium mb-8">More works</h2>
        <div className="grid gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-6 md:grid-cols-4 grid-cols-2">
          {data.map((i) => {
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
      </div>
      <Footer />
    </>
  );
}
