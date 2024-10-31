import { Box, Heading, Text } from "@chakra-ui/react";
import { fonts } from "@/assets/fonts/font";
import Slider from "../Common/Slider";

export default function OpeningSection() {
  const { buttler, newsreader, poppins } = fonts;

  return (
    <Box padding="50px 0 100px" textAlign="center" position="relative">
      <Box
        fontWeight="bold"
        fontFamily={poppins.variable}
        letterSpacing="2px"
        textTransform="uppercase"
        textAlign="center"
      >
        <Text fontSize="12px">Dear mr-mrs-ms,</Text>
        <Text fontSize="12px">Family & Friend</Text>
      </Box>

      <Heading
        fontSize="32px"
        padding="24px 0"
        fontWeight="medium"
        fontFamily={buttler.variable}
        lineHeight="1.2"
      >
        Welcome to <br />
        Romeo & Juliet <br />
        Wedding Website
      </Heading>

      <Text
        padding="0px 10% 24px"
        fontSize="18px"
        fontStyle="italic"
        marginBottom="18px"
        fontFamily={newsreader.variable}
      >
        Together with joyful hearts and the grace of God, we joyfully announce
        the upcoming of our marriage.
      </Text>

      <Slider />
    </Box>
  );
}
