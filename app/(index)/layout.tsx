import { Tabs, Jumbo, Logo } from "../components/client";
import { TopMenu, Footer } from "../components/server";
import Image from "next/image";
import data from "../main.json";

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative px-4">
      <header id="header" className="container pt-4 md:pt-10">
        <div className="text-center">
          <Image
            className="inline-block mb-4"
            src="yask.svg"
            priority={true}
            width={64}
            height={64}
            alt="Yask Design"
          />
          <Jumbo datas={data} />
        </div>
      </header>
      <div className="sticky container md:fixed py-4 flex md:justify-end justify-center  top-0 z-10 w-full">
        <TopMenu />
      </div>

      <nav className="md:sticky w-fit m-auto fixed z-20 md:bg-transparent text-center bottom-0 left-0 py-4 right-0 md:mb-6 md:top-0">
        <Tabs className="bg-yask text-white" />
      </nav>
      {children}
      <Footer />
    </div>
  );
}
