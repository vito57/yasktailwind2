import "../styles/globals.css";
import { Inter } from "@next/font/google";

export const metadata = {
  title: "Yask",
  description: "Web and app design",
};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// END FONT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-ybg text-yask" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
