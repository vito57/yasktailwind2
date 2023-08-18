import { AnimateLayout } from "../../components/client";
import { Article, Text } from "../../components/server";
import { Section, ArticleImageSection } from "../../components/server";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Drugcode - Code editor design",
    description: "Story about Drugcode design",
  };
  export default function Flamingo(){
    return (
        <AnimateLayout>
        <Article className="relative">
          <header id="intro" className="mb-8 pt-[128px] reletive mt-[-128px] ">
            <div className="container px-4">
              <Image
                src="/works/flamingo/flamingo-cover.png"
                width={1120}
                height={416}
                className="w-full mb-8 rounded"
                alt="Drugcode"
              />
            </div>
          </header>
          </Article>
         </AnimateLayout>
    )
  }