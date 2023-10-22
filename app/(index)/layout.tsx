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
    { name: "Works", default:true, title:"Hi! We Do Web & App Design, Icons Sets and Code", href: "/" },
    { name: "Feed", default:false, title:"Hi! We Love Web & App Design, Icons Sets and Code", href: "/feed" },
    { name: "About", default:false, title:"Hi! We Feed Web & App Design, Icons Sets and Code", href: "/about" },
  ];
  return (
    <div className="container">
      <TopMenu />
      <header id="header" className="container">
        <div className="text-center ">
          <Image
            className="inline-block mb-6 "
            src="yask-logo.svg"
            width={64}
            height={64}
            alt="Yask Design"
          />
          <Jumbo />
        </div>
      </header>
      <nav className="sticky z-10 text-center mb-10 top-8">
        <Tabs datas={data} className="bg-yask dark:bg-red-500 text-white" />
      </nav>
      {children}
      <Footer />
    </div>
  );
}
