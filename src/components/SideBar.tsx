import { fonts } from "@/assets/fonts/font";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SideBar() {
  const { buttler, poppins } = fonts;

  return (
    <Box
      borderEndWidth="8px"
      position="fixed"
      width="calc(100% - 500px)"
      height="100%"
      borderColor="blackAlpha.400"
      background={
        "linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539) center center / cover;"
      }
    >
      <Box color="white" padding="42px">
        <Text
          textTransform="uppercase"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="16px"
          fontFamily={poppins.variable}
        >
          Wedding Announcement
        </Text>

        <Heading
          as="h2"
          textTransform="uppercase"
          paddingTop="32px"
          fontSize="72px"
          fontWeight="thin"
          fontFamily={buttler.variable}
        >
          Shodiq & <br /> Hani
        </Heading>

        <Text
          fontSize="16px"
          letterSpacing="1px"
          maxWidth="800px"
          fontStyle="italic"
          fontWeight="light"
          opacity="0.8"
        >
          "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
          diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
          mencintaimu dengan sederhana; dengan isyarat yang tak sempat
          disampaikan awan kepada hujan yang menjadikannya tiada."
          <br /> — Sapardi Djoko Damono
        </Text>
      </Box>
    </Box>
  );
}
