import { Box, Heading, Text } from "@chakra-ui/react";
import { fonts } from "@/assets/fonts/font";
import Slider from "../Common/Slider";
import { motion } from "framer-motion";

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
        <Text
          fontSize="12px"
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition="0.5s duration 0.5 easeOut"
        >
          Dear mr-mrs-ms,
        </Text>
        <Text
          fontSize="12px"
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition="0.5s duration 0.5 easeOut 0.1s"
        >
          Family & Friend
        </Text>
      </Box>

      <Heading
        as={motion.h1}
        fontSize="32px"
        padding="24px 0"
        fontWeight="medium"
        fontFamily={buttler.variable}
        lineHeight="1.2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition="0.5s duration 0.5 easeOut 0.2s"
      >
        Welcome to <br />
        Romeo & Juliet <br />
        Wedding Website
      </Heading>

      <Text
        as={motion.p}
        padding="0px 10% 24px"
        fontSize="18px"
        fontStyle="italic"
        marginBottom="18px"
        fontFamily={newsreader.variable}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition="0.5s duration 0.5 easeOut 0.3s"
      >
        Together with joyful hearts and the grace of God, we joyfully announce
        the upcoming of our marriage.
      </Text>

      <Slider />
    </Box>
  );
}