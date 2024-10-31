import { fonts } from "@/assets/fonts/font";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function WelcomeSection() {
  const { buttler, poppins } = fonts;

  return (
    <Box minHeight="100vh" backgroundColor="whitesmoke" position="relative">
      <div className="slide">
        <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/images/invitation-wedding-1.jpg')"></Box>

        <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/images/invitation-wedding-2.jpg')"></Box>

        <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/images/invitation-wedding-3.jpg')"></Box>

        <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/images/invitation-wedding-4.jpg')"></Box>

        <Box background="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/images/invitation-wedding-5.jpg')"></Box>
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
              Romeo & Juliet
            </Heading>

            <Heading
              as="h2"
              fontSize="4xl"
              fontWeight="light"
              fontFamily={buttler.variable}
              fontStyle="italic"
              lineHeight="1.2"
            >
              #RomeoJuliet
            </Heading>
          </Box>
        </Flex>
        <Button
          textTransform="uppercase"
          rightIcon={<MdKeyboardArrowDown size="2em" />}
          background="transparent"
          _hover={{ background: "transparent" }}
          color="#fefefe"
          marginLeft="auto"
          marginTop="2rem"
          padding="0"
          display="flex"
          justifyContent="flex-end"
          onClick={() => {
            document.getElementById("opening")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Scroll To Begin
        </Button>
      </Box>
    </Box>
  );
}
