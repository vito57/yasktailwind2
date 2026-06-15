import Link from "next/link";

export default function MainFooter(){
    return (
            <p className="text-sm text-center mt-8 mb-8">
      Copyright © 2008—2026. Yaskevich. <br /> Thanks:{" "}
      <Link href="https://react.dev/" className="ylink">
        React
      </Link>
      ,{" "}
      <Link href="https://tailwindcss.com/" className="ylink">
        Tailwind
      </Link>
      ,{" "}
      <Link href="https://nextjs.org/" className="ylink">
        Next
      </Link>
      ,{" "}
      <Link href="https://github.com/" className="ylink">
        Github
      </Link>
    </p>
    )
}