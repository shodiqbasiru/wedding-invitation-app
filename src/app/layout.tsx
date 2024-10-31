import type { Metadata } from "next";
import "../assets/globals.css";
import { Providers } from "./providers";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../components/Common/SideBar";
import { fonts } from "../assets/fonts/font";

export const metadata: Metadata = {
  title: "The Wedding of Romeo & Juliet by shodiqbasiru",
  description: "The wedding of Romeo & Juliet",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex
            height="100%"
            width="100%"
            background="transparent"
            justifyContent="space-between"
            position="relative"
            fontFamily={fonts.newsreader.variable}
          >
            <Box className="web-view__left-side">
              <SideBar />
            </Box>
            <Box className="web-view__right-side">
              <Box boxShadow="2xl">{children}</Box>
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
