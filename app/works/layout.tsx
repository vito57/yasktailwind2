import { ArticleTopMenu, Footer } from "../components/server";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white pt-8">
      <ArticleTopMenu />
      {children}
      <Footer />
    </div>
  );
}
