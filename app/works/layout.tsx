import { ArticleTopMenu, Footer, PortfolioItem } from "../components/server";
import data from "../data.json";
export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleTopMenu title="Drugcode editor design" />
      {children}
      <div className="container px-4">
        <h2 className="text-xl font-bold mb-8">More works</h2>
        <div className="grid gap-x-8 gap-y-6 lg:grid-cols-4 md:grid-cols-2">
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
