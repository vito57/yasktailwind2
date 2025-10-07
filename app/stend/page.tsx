import card1bg from "./img/gigacard/cardbg.png";
import card1sfera from "./img/gigacard/circle.png";
import card1content from "./img/gigacard/gc.png";

import card2content from "./img/linecard/card2content.png";
import card2globe from "./img/linecard/globe.png";

import card3bg from "./img/newscard/lines.png";
import card3content from "./img/newscard/card3content.png";

import Image from "next/image";
export default function Page() {
  return (
    <div
      className={`flex flex-col justify-center bg-[image:url(/stend/bg.png)] bg-cover items-center bg-black text-white h-screen`}
    >
      <div className="max-w-6xl w-full">
        <nav>back date edsd</nav>
        <div className="grid grid-cols-3 gap-5">
          <div className="aspect-video overflow-hidden rounded-xl bg-black/24 relative">
            <Image
              src={card1sfera}
              className="rotate-173 mix-blend-plus-lighter absolute left-[50%]  z-2 top-[-20%]"
              alt=""
            />
            <Image
              src={card1content}
              className="mix-blend-plus-lighter  absolute z-3"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter z-1 scale-175 rotate-45"
              alt=""
            />
          </div>
          {/* Card2 */}
          <div className="aspect-video overflow-hidden rounded-xl bg-black/24 relative">
            <Image
              src={card2globe}
              className=" absolute mix-blend-plus-lighter left-[30%] scale-125 z-2 top-[12%]"
              alt=""
            />
            <Image
              src={card2content}
              className="mix-blend-plus-lighter  absolute z-3"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter z-1 scale-275 rotate-15"
              alt=""
            />
          </div>
          {/* Card3 */}
          <div className="aspect-video overflow-hidden rounded-xl bg-black/24 relative">
            <Image src={card3content} className="  absolute z-3" alt="" />
            <Image
              src={card3bg}
              className="mix-blend-plus-lighter absolute left-[27%] z-1 scale-160"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter z-0 scale-175 rotate-23"
              alt=""
            />
          </div>

          <div className="aspect-video bg-red-300">1</div>
          <div className="aspect-video bg-red-300">1</div>
          <div className="aspect-video bg-red-300">1</div>
        </div>
      </div>
    </div>
  );
}
