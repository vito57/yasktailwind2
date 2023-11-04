import { Tabs, Jumbo, Logo } from "../components/client";
import { TopMenu, Footer } from "../components/server";
import Image from "next/image";

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = [
    {
      name: "Works",
      title: "Hi! We Do Web & App Design, Icons Sets and Code",
      href: "/",
    },
    {
      name: "Feed",
      title: "We are Happy to Share Design Ideas and Freebies ",
      href: "/feed",
    },
    {
      name: "About",
      title: "Super! Nice to Meet You! Let's Introduce Ourselves ✋",
      href: "/about",
    },
  ];
  return (
    <div className="container px-4">
      <TopMenu />
      <header id="header" className="container">
        <div className="text-center">
          <Image
            className="inline-block mb-6"
            src="yask.svg"
            width={64}
            height={64}
            alt="Yask Design"
          />
          <Jumbo datas={data} />
        </div>
      </header>
      <nav className="md:sticky fixed z-10 bg-yask md:bg-transparent text-center bottom-0 left-0 py-2 right-0 md:mb-10 md:top-8">
        <Tabs datas={data} className="bg-yask dark:bg-red-500 text-white" />
      </nav>
      {children}
      <Footer />
    </div>
  );
}
