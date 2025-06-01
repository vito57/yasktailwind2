import { Navigation, Jumbo, Logo } from "../components/client";
import { TopMenu, Footer } from "../components/server";
import Image from "next/image";
import data from "../main.json";
export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <header id="header" className="pt-4 md:pt-10">
        <div className="text-center relative">
          <Image
            alt="Peace"
            className="hidden md:block absolute left-[15%] top-[50%] -mt-4"
            width={96 / 2}
            height={96 / 2}
            src={"/peace.png"}
          />
          <Logo />

          <Jumbo datas={data} />
        </div>
      </header>
      <div className="sticky container md:fixed py-4 flex md:justify-end justify-center  top-0 z-20 w-full">
        <TopMenu />
      </div>
      <nav className="md:sticky w-fit m-auto fixed z-30 md:bg-transparent text-center bottom-0 left-0 py-4 right-0 md:mb-6 md:top-0">
        <Navigation className="bg-yask text-white" />
      </nav>
      {children}
      <Footer />
    </div>
  );
}
