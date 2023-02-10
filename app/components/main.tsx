"use client";
import Link from "next/link";
import { useState } from "react";
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className="outline outline-1 inline-block tracking-tight outline-yask  transition rounded-xl px-3 py-2 bg-white text-yask"
    >
      {children}
    </Link>
  );
}
export function Tabs() {
  const [active, setActive] = useState();
  return (
    <menu className="bg-yask gap-1 hover:scale-105 transition-transform transition-gpu rounded-xl p-0.5 inline-flex justify-center">
      <li>
        <Link
          className="px-3 tracking-[-0.006em] text-sm cursor-default inline-block rounded-[10px]  text-white bg-yred py-1.5 "
          href="/"
        >
          Works
        </Link>
      </li>
      <li>
        <Link
          className="px-3 text-sm tracking-[-0.006em] hover:opacity-100 opacity-90 transition-opacity inline-block text-white py-1.5 "
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="px-3 tracking-[-0.006em] after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-ylime  after:absolute text-sm inline-block hover:opacity-100 opacity-90 transition-opacity text-white py-1.5 "
          href="/"
        >
          Feed
        </Link>
      </li>
    </menu>
  );
}
