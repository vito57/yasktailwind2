import {Inter, JetBrains_Mono} from "next/font/google";
import localFont from "next/font/local";
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});
export const serotiva = localFont({
  variable: "--font-serotiva",
  src: "Serotiva.woff2",
  display: "swap",
  fallback: [
    "system-ui",
    " -apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});
export const jbm = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});