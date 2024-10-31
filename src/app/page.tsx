"use client";

import { useState } from "react";
import CoverSection from "@/components/Home/CoverSection";
import WelcomeSection from "@/components/Home/WelcomeSection";
import { Box, Button, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMusicNote } from "react-icons/md";
import OpeningSection from "@/components/Home/OpeningSection";
import FooterSection from "@/components/Home/FooterSection";

export default function Home() {
  const [openInvitation, setOpenInvitation] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOpenInvitation(true);
      setTimeout(() => {
        document.getElementById("welcome-section")?.classList.add("slide-down");
      }, 0);
    }, 3000);
  };

  return (
    <>
      {!openInvitation ? (
        <div id="welcome-section" className="slide-top">
          <Flex gap="3" position="fixed" zIndex="3" left="5" bottom="5">
            <span className="button">
              <GiHamburgerMenu />
            </span>
            <span className="button">
              <MdMusicNote />
            </span>
          </Flex>
          <WelcomeSection />
          <div id="opening">
            <OpeningSection />
          </div>
          <FooterSection />
        </div>
      ) : (
        <Box position="relative">
          <CoverSection
            showInvitation={handleOpenInvitation}
            isLoading={isLoading}
          />
        </Box>
      )}
    </>
  );
}
