import { fonts } from "@/assets/fonts/font";
import { Box, Heading, Text } from "@chakra-ui/react";

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
        "linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/images/bg.jpg') center center / cover;"
      }
    >
      <Box color="#fefefe" padding="42px">
        <Text
          textTransform="uppercase"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="16px"
          fontFamily={poppins.variable}
        >
          Wedding Announcement
        </Text>

        <Box paddingTop="32px" textTransform="uppercase" letterSpacing="4px">
          <Heading
            as="h2"
            lineHeight="1"
            fontSize="4.5rem"
            fontWeight="light"
            fontFamily={buttler.variable}
          >
            Romeo &
          </Heading>
          <Heading
            as="h2"
            fontSize="4.5rem"
            fontWeight="light"
            fontFamily={buttler.variable}
            marginTop="-16px"
          >
            Juliet
          </Heading>
        </Box>

        <Text
          fontSize="16px"
          letterSpacing="1px"
          maxWidth="800px"
          fontStyle="italic"
          fontWeight="light"
          opacity="0.8"
        >
          &quot;Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
          sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
          mencintaimu dengan sederhana; dengan isyarat yang tak sempat
          disampaikan awan kepada hujan yang menjadikannya tiada.&quot;
          <br /> — Sapardi Djoko Damono
        </Text>
      </Box>
    </Box>
  );
}
