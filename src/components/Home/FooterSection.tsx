import { fonts } from "@/assets/fonts/font";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEarthAsia, FaWebAwesome } from "react-icons/fa6";

export default function FooterSection() {
  const { newsreader } = fonts;
  return (
    <Box
      padding="32px 0"
      textAlign="center"
      width="100%"
      color="#1a1b1d"
      fontFamily={newsreader.variable}
    >
      <Box
        fontSize="12px"
        fontWeight="bold"
        textTransform="capitalize"
        textAlign="center"
      >
        <Flex
          flexDirection="column"
          gap="3"
          padding="16px 0"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Heading
            as="h4"
            fontWeight="semibold"
            fontSize="16px"
            textAlign="center"
          >
            Created by Shodiq Basiru
          </Heading>
          <Flex flexWrap="wrap" gap="4">
            <Link href="https://github.com/shodiqbasiru" target="_blank" fontSize="35px">
              <span>
                <FaGithub />
              </span>
            </Link>

            <Link href="https://www.linkedin.com/in/shodiq-basiru/" target="_blank" fontSize="35px">
              <span>
                <FaLinkedin />
              </span>
            </Link>

            <Link href="https://shodiq-basiru.netlify.app/" target="_blank" fontSize="35px">
              <span>
              <FaEarthAsia />
              </span>
            </Link>
          </Flex>
        </Flex>

        <Text fontSize="14px">Song by So Far, So Good - Don Williams</Text>
        <Text fontSize="14px">© 2024 Rome & Juliet</Text>
      </Box>
    </Box>
  );
}
