import Image from "next/image";
import Link from "next/link";
import { Tabs, Button } from "./components/main";
import data from "./data.json";
export default function Home() {
  return (
    <>
      <div className="container z-20  justify-end flex gap-4 sticky top-8">
        <Button>Send email</Button>
        <Link href="/">
          <Image
            src="dribbble.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
        <Link href="/">
          <Image
            src="ui8.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
      </div>
      <header id="header" className="container">
        <hgroup className="text-center ">
          <Image
            className="inline-block mb-6 "
            src="yask-logo.svg"
            width={64}
            height={64}
            alt="Yask Design"
          />
          <h1 className="text-[40px]/[56px] tracking-[-0.021em] mb-6 text-yask">
            Hi! We Do Web & App Design
            <br /> Icons Sets and Frontend
          </h1>
        </hgroup>
      </header>
      <nav className="container z-10 text-center mb-10 sticky top-8">
        <Tabs />
      </nav>
      <main className="container px-4">
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
          {data.map((i) => {
            return (
              <Link key={i.path} href={i.path} className="group/item">
                <figure>
                  <Image
                    src={i.cover}
                    width={400}
                    height={300}
                    className="w-full group-hover/item:scale-[1.01]  duration-200 transition-transform transform-gpu rounded"
                    alt={i.title}
                  />
                  <figcaption className="flex text-sm tracking-[-0.006em] transition py-0.5 justify-between text-yask">
                    <span>{i.title}</span>
                    <span className="opacity-50">{i.type}</span>
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
