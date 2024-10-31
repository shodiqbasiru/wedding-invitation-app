"use client";

import { fonts } from "@/assets/fonts/font";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const finalRef = React.useRef(null);
  const { newsreader } = fonts;
  return (
    <Modal
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent
        style={{
          position: "fixed",
          right: "0px",
          top: "0px",
          bottom: "0px",
          width: "100%",
          transform: "translateX(0%) translateY(0px) translateZ(0px)",
        }}
        borderRadius="0"
        maxHeight="100vh"
        margin="0"
        padding="24px 16px"
        maxWidth="400px"
        outline="transparent solid 2px"
        outlineOffset="2px"
        backgroundColor="#f9f7f4"
      >
        <ModalBody
          textAlign="right"
          fontFamily={newsreader.variable}
          color="#1a1b1d"
        >
          <Heading
            as="h2"
            fontSize="2.25rem"
            fontWeight="light"
            marginTop="16px"
            fontStyle="italic"
          >
            #RomeoJuliet
          </Heading>

          <Box marginTop="40px">
            <div>
              <Text
                fontSize="sm"
                marginTop="24px"
                textTransform="uppercase"
                letterSpacing="3px"
                cursor="pointer"
              >
                Bride & Groom
              </Text>
              <Divider
                opacity="0.6"
                borderWidth="0px 0px 1px"
                borderStyle="solid"
                width="100%"
                marginTop="8px"
                borderColor="#1a1b1d"
              />
            </div>
            <div>
              <Text
                fontSize="sm"
                marginTop="24px"
                textTransform="uppercase"
                letterSpacing="3px"
                cursor="pointer"
              >
                Live Streaming
              </Text>
              <Divider
                opacity="0.6"
                borderWidth="0px 0px 1px"
                borderStyle="solid"
                width="100%"
                marginTop="8px"
                borderColor="#1a1b1d"
              />
            </div>
            <div>
              <Text
                fontSize="sm"
                marginTop="24px"
                textTransform="uppercase"
                letterSpacing="3px"
                cursor="pointer"
              >
                Wedding Gift
              </Text>
              <Divider
                opacity="0.6"
                borderWidth="0px 0px 1px"
                borderStyle="solid"
                width="100%"
                marginTop="8px"
                borderColor="#1a1b1d"
              />
            </div>
          </Box>
        </ModalBody>

        <ModalFooter flexDirection="column" justifyContent="flex-end" gap="4">
          <Heading
            as="h4"
            fontWeight="semibold"
            fontSize="16px"
            textAlign="center"
          >
            Created by Shodiq Basiru
          </Heading>
          <Flex flexWrap="wrap" gap="4">
            <Link
              href="https://github.com/shodiqbasiru"
              target="_blank"
              fontSize="35px"
            >
              <span>
                <FaGithub />
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/shodiq-basiru/"
              target="_blank"
              fontSize="35px"
            >
              <span>
                <FaLinkedin />
              </span>
            </Link>

            <Link
              href="https://shodiq-basiru.netlify.app/"
              target="_blank"
              fontSize="35px"
            >
              <span>
                <FaEarthAsia />
              </span>
            </Link>
          </Flex>
          <Text fontSize="14px">© 2024 Rome & Juliet</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // <Slide direction='right' in={true} style={{ zIndex: 10 }}>
    //   <Flex width="100vw" height="100dvh" position="fixed" left="0" top="0" zIndex="1400" justifyContent="center">
    //     <Box
    //       p='40px'
    //       color='#1a1b1d'
    //       bg='#fefefe'
    //       shadow='md'
    //       position='fixed'
    //       top="0"
    //       right="0"
    //       minH='100vh'
    //       width="calc(500px - 80px)"
    //     >
    //     tes
    //     </Box>
    //   </Flex>

    //   </Slide>
  );
}
