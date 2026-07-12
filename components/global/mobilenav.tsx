import MainNav from "./mainnav";

//MOBILE ARTICLE FOOTER
export default function MobileNav() {
  return (
    <div
      className={`flex md:hidden fixed md:static py-4 justify-center left-0 right-0 bottom-0 gap-2 z-10 items-center`}
    >
        <MainNav/>
    </div>
  );
}
//END MOBILE ARTICLE FOOTER