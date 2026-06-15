import MainNav from "../regions/mainnav";

//MOBILE ARTICLE FOOTER
export function MobileNav() {
  return (
    <div
      className={`flex md:hidden fixed md:static py-4 justify-center left-0 right-0 bottom-0 gap-2 z-10 items-center`}
    >
        <MainNav/>
      {/* <Navigation className="bg-yred  dark:md:text-ytextdark md:text-yask text-white md:bg-transparent" /> */}
      {/* <Button path="mailto:vito57rus@yandex.ru" className="hidden md:block">Send email</Button> */}
    </div>
  );
}
//END MOBILE ARTICLE FOOTER