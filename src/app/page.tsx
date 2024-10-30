"use client";

import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex minHeight="100dvh">
      <Box flex={1} bg='tomato'>
        Hello
      </Box>
      <Box bg='papayawhip'>
        World
      </Box>
    </Flex>
  );
}
