import { Button, ArticleTopMenu, Footer } from "../components/server";
import { Tabs } from "../components/client";
import Image from "next/image";
import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = [
    { name: "Vitaly", href: "/vitaly" },
    { name: "Gala", href: "/gala" },
    { name: "Vera", href: "/vera" },
  ];
  return (
    <div>
      <ArticleTopMenu title="About us" />

      <header className="text-center mb-6">
        <Image
          className="inline-block mb-1.5 "
          src="yask-logo.svg"
          width={80}
          height={80}
          alt="Vitaly Yask."
        />
        <h2 className="text-3xl font-bold">Vitaly</h2>
        <a href="/" className="text-ylightblue">
          vitaly@yask.work
        </a>
      </header>
      <div className="flex gap-2 items-center justify-center mb-8">
        <Button path="/">Resume.pdf</Button>
        <Link href="https://dribbble.com/yask">
          <Image
            src="dribbble.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
        <Link href="https://ui8.net/gala-yask">
          <Image
            src="linkedin.svg"
            width={40}
            height={40}
            className="rounded-full transition-transform hover:scale-105"
            alt="Yask Dribbble"
          />
        </Link>
      </div>
      <div className="container px-4">{children}</div>
      <Footer />
    </div>
  );
}
