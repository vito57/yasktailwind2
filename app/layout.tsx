import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { BgColor } from "./components/client";
export const metadata = {
  title: "Yask design",
  description: "Web and app design",
};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// END FONT
//process.env.defClass = "text-yask bg-white";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={process.env.defClass} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
