import { Tabs, Jumbo } from "../components/client";
import { TopMenu, Button, Footer } from "../components/server";
import Link from "next/link";
import Image from "next/image";

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = [
    { name: "Works", href: "/" },
    { name: "About", href: "/about" },
    { name: "Feed", href: "/feed" },
  ];
  return (
    <>
      <TopMenu />
      <header id="header" className="container">
        <hgroup className="text-center ">
          <Image
            className="inline-block mb-6 "
            src="yask-logo.svg"
            width={64}
            height={64}
            alt="Yask Design"
          />
          <Jumbo />
        </hgroup>
      </header>
      <nav className="container z-10 text-center mb-10 sticky top-8">
        <Tabs datas={data} className="bg-yask text-white" />
      </nav>
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
