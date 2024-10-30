import { fonts } from "@/assets/fonts/font";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

export default function CoverSection() {
  const { buttler, poppins } = fonts;

  return (
    <>
      <Box
        height="100vh"
        width="100%"
        padding="2rem"
        color="white"
        background="linear-gradient(rgb(50 48 48 / 50%), rgb(50 48 48 / 50%)), center / cover url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920);"
      >
        <Heading
          as="h2"
          marginTop="60px"
          marginBottom="10px"
          textTransform="uppercase"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="16px"
          textAlign="center"
          fontFamily={poppins.variable}
        >
          Wedding Announcement
        </Heading>

        <Flex
          alignItems="center"
          justifyContent="center"
          height="calc(90% - 130px)"
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
      <Box position="absolute" bottom="40" width="100%">
        <Flex alignItems="center" justifyContent="center" width="100%">
          <Button
            colorScheme="gray"
            size="sm"
            rounded="0"
            padding="0 2.4rem"
            outline="2px solid transparent"
            outlineOffset="2px"
            verticalAlign="middle"
            fontSize="lg"
            fontStyle="italic"
            border="1px solid #1a1b1d"
            transitionProperty="all"
            transitionDuration="200ms"
            className="animation-bounce"
          >
            Open
          </Button>
        </Flex>
      </Box>
    </>
  );
}
