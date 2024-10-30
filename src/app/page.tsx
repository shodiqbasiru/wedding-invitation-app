"use client";

import { fonts } from "@/assets/fonts/font";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import CoverSection from "@/components/CoverSection";

export default function Home() {
  const [cover, setCover] = useState<boolean>(false);
  const { buttler, poppins } = fonts;

  return (
    <>
      {cover ? (
        <Box minHeight="100vh" backgroundColor="whitesmoke" position="relative" >
        <div className="slide">
          <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642)"></Box>

          <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322)"></Box>

          <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828)"></Box>

          <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497)"></Box>

          <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372)"></Box>
        </div>
        <Box
          height="100vh"
          width="100%"
          padding="2rem"
          position="relative"
          zIndex="2"
          color="white"
          textAlign="center"
        >
          <Heading
            as="h2"
            marginTop="60px"
            marginBottom="10px"
            textTransform="uppercase"
            letterSpacing="2px"
            fontWeight="bold"
            fontSize="16px"
            fontFamily={poppins.variable}
          >
            Wedding Announcement
          </Heading>

          <Flex
            alignItems="center"
            justifyContent="center"
            height="calc(90% - 30px)"
          >
            <Box textAlign="center">
              <Heading
                as="h2"
                textTransform="uppercase"
                paddingTop="32px"
                fontSize="4xl"
                fontWeight="light"
                fontFamily={buttler.variable}
                lineHeight="1.2"
              >
                Shodiq & Hani
              </Heading>

              <Heading
                as="h2"
                fontSize="4xl"
                fontWeight="light"
                fontFamily={buttler.variable}
                fontStyle="italic"
                lineHeight="1.2"
              >
                #ShodiqHani
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
      ): (
        <CoverSection />
      )}
    </>
  );
}
