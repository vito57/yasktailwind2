import { ArticleTopMenu, Footer } from "../components/server";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleTopMenu />
      {children}
      <Footer />
    </>
  );
}
