import { Poppins, Newsreader } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const buttler = localFont({
  src: "./Butler.woff",
  variable: "--font-butler",
});

export const fonts = { poppins, newsreader, buttler };
