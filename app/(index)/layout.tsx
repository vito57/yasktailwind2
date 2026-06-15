import MainNav from "@/components/regions/mainnav";
import { Navigation, Jumbo, Logo } from "../components/client";
import data from "../main.json";
import MainFooter from "@/components/regions/mainfooter";
import MainTopMenu from "@/components/regions/maintopmenu";
import { MainTitle } from "@/components/regions/maintitle";
import { MainLogo } from "@/components/regions/mainlogo";
export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <header id="header" className="pt-4 md:pt-10">
        <div className="text-center relative">
          <MainLogo />
          <MainTitle datas={data} />
        </div>
      </header>
      <div className="sticky container md:fixed py-4 flex md:justify-end justify-center top-0 z-20 w-full">
        <MainTopMenu />
      </div>
      <nav className="md:sticky w-fit m-auto fixed z-30 md:bg-transparent text-center bottom-0 left-0 py-4 right-0 md:mb-6 md:top-0">
        {/* <Navigation className="bg-yask text-white" /> */}
        <MainNav datas ={data} />
      </nav>
      {children}
      <MainFooter />
    </div>
  );
}
