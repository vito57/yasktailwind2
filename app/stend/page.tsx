import card1bg from "./img/gigacard/cardbg.png";
import card1sfera from "./img/gigacard/circle.png";
import card1content from "./img/gigacard/gc.png";

import card2content from "./img/linecard/card2content.png";
import card2globe from "./img/linecard/globe.png";

import card3bg from "./img/newscard/lines.png";
import card3content from "./img/newscard/card3content.png";

import card4bg from "./img/efircard/bg.png";
import card4content from "./img/efircard/card4content.png";

import card5content from "./img/feedcard/card5content.png";
import card5bg from "./img/feedcard/bg.png";

import browser from "./img/appscard/Browser widget.png";
import note from "./img/appscard/Notes.png";
import jazz from "./img/appscard/Jazz.png";
import telega from "./img/appscard/Tel.png";
import mail from "./img/appscard/Mail.png";
import watch from "./img/appscard/Watch.png";

import Image from "next/image";
export default function Page() {
  return (
    <div
      className={`flex flex-col justify-center bg-[image:url(/stend/bg.png)] bg-cover items-center bg-black text-white h-screen overflow-hidden relative`}
    >
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-3 gap-5">
          <div
            className="aspect-video cursor-pointer shadow-2xl/50 hover:scale-102 transition-transform duration-700 overflow-hidden rounded-xl bg-black/24 relative
          
          
          "
          >
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-transparent border-1 border-white/50  mask-alpha mask-r-from-black  mask-r-to-transparent rounded-xl z-100 mix-blend-overlay"></div>
            <Image
              src={card1sfera}
              className="rotate-173 hover:rotate-2 transition-all mix-blend-plus-lighter absolute left-[50%]  z-2 top-[-20%]"
              alt=""
            />
            <Image
              src={card1content}
              className="mix-blend-plus-lighter  absolute z-3"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter z-1 scale-200 rotate-45"
              alt=""
            />
          </div>
          {/* Card2 */}
          <div className="aspect-video cursor-pointer shadow-2xl/50 hover:scale-102 transition-transform duration-700 overflow-hidden rounded-xl bg-black/24 relative">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-transparent border-1 border-white/50  mask-alpha mask-r-from-black  mask-r-to-transparent rounded-xl z-100 mix-blend-overlay"></div>
            <Image
              src={card2globe}
              className=" absolute opacity-80 left-[30%] scale-125 z-2 top-[12%]"
              alt=""
            />
            <Image
              src={card2content}
              className="mix-blend-plus-lighter  absolute z-3"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter z-1 scale-250 rotate-90"
              alt=""
            />
          </div>
          {/* Card3 */}
          <div className="aspect-video cursor-pointer shadow-2xl/50 hover:scale-102 transition-transform duration-700 overflow-hidden rounded-xl bg-black/24 relative">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-transparent border-1 border-white/50  mask-alpha mask-r-from-black  mask-r-to-transparent rounded-xl z-100 mix-blend-overlay"></div>
            <Image src={card3content} className="  absolute z-3" alt="" />
            <Image
              src={card3bg}
              className="mix-blend-plus-lighter absolute left-[27%] z-1 scale-160"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter z-0 scale-300 rotate-23"
              alt=""
            />
          </div>
          {/* Card4 */}
          <div className="aspect-video cursor-pointer shadow-2xl/50 hover:scale-102 transition-transform duration-700 backdrop-blur-3xl overflow-hidden rounded-xl bg-black/24 relative">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-transparent border-1 border-white/50  mask-alpha mask-r-from-black  mask-r-to-transparent rounded-xl z-100 mix-blend-overlay"></div>
            <Image src={card4content} className="absolute z-3" alt="" />
            <Image
              src={card4bg}
              className="mix-blend-plus-lighter absolute z-1"
              alt=""
            />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter scale-300 absolute z-0 "
              alt=""
            />
          </div>
          {/* Card5 */}
          <div className="aspect-video cursor-pointer shadow-2xl/50 hover:scale-102 transition-transform duration-700 backdrop-blur-3xl overflow-hidden rounded-xl bg-black/24 relative">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-transparent border-1 border-white/50  mask-alpha mask-r-from-black  mask-r-to-transparent rounded-xl z-100 mix-blend-overlay"></div>
            <Image src={card5content} className="absolute z-3" alt="" />
            <Image src={card5bg} className=" absolute z-1" alt="" />
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter scale-300 absolute z-0 "
              alt=""
            />
          </div>
          {/* Card6 */}
          <div className="aspect-video flex backdrop-blur-3xl overflow-hidden rounded-xl bg-black/24 relative">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-transparent border-1 border-white/50  mask-alpha mask-r-from-black  mask-r-to-transparent rounded-xl z-100 mix-blend-overlay"></div>
            <div className="relative z-50 grid grid-cols-3 gap-4 self-center p-10">
              <Image
                className="aspect-video rounded-xl cursor-pointer hover:scale-120 transition-transform  "
                src={browser}
                alt=""
              />
              <Image
                className="aspect-video rounded-xl cursor-pointer hover:scale-120 transition-transform  "
                src={note}
                alt=""
              />
              <Image
                className="aspect-video rounded-xl cursor-pointer hover:scale-120 transition-transform  "
                src={jazz}
                alt=""
              />
              <Image
                className="aspect-video rounded-xl cursor-pointer hover:scale-120 transition-transform  "
                src={mail}
                alt=""
              />
              <Image
                className="aspect-video rounded-xl cursor-pointer hover:scale-120 transition-transform  "
                src={telega}
                alt=""
              />
              <Image
                className="aspect-video rounded-xl cursor-pointer hover:scale-120 transition-transform  "
                src={watch}
                alt=""
              />
            </div>
            <Image
              src={card1bg}
              className="mix-blend-plus-lighter scale-300 absolute z-0 "
              alt=""
            />
          </div>
        </div>
      </div>
      <Image
        src="/stend/circle.png"
        width={1500}
        height={1500}
        className="absolute mix-blend-plus-lighter animate-[spin_120s_linear_infinite] right-[40%] scale-200 rotate-135 opacity-50 top-[110%] z-0"
        alt=""
      />
    </div>
  );
}
