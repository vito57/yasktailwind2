import MainNav from "@/components/global/mainnav";
import data from "../main.json";
import MainFooter from "@/components/global/mainfooter";
import MainTopMenu from "@/components/global/maintopmenu";
import  MainTitle  from "@/components/global/maintitle";
import  MainLogo  from "@/components/global/mainlogo";
export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <header id="header" className="pt-4 md:pt-10">
        <div className="relative flex gap-5 flex-col items-center">
          <MainLogo />
          <MainTitle datas={data} />
        </div>
      </header>
      <div className="sticky container md:fixed py-4 flex md:justify-end justify-center top-0 z-20 w-full">
        <MainTopMenu />
      </div>
      <nav className="md:sticky w-fit m-auto fixed z-30 md:bg-transparent text-center bottom-0 left-0 py-4 right-0 md:mb-6 md:top-0">
        <MainNav datas ={data} />
      </nav>
      {children}
    
    </div>
  );
}
