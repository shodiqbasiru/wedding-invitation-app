"use client";

import { useEffect, useRef, useState } from "react";
import CoverSection from "@/components/Home/CoverSection";
import WelcomeSection from "@/components/Home/WelcomeSection";
import { Box, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMusicNote } from "react-icons/md";
import OpeningSection from "@/components/Home/OpeningSection";
import FooterSection from "@/components/Home/FooterSection";

export default function Home() {
  const [openInvitation, setOpenInvitation] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOpenInvitation(true);
      setTimeout(() => {
        document.getElementById("welcome-section")?.classList.add("slide-down");
      }, 0);
    }, 3000);
  };

  const handleMuteAudio = () => {
    if(audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  }

  useEffect(() => {
    if(openInvitation && audioRef.current) {
      audioRef.current.play();
    }
  }, [openInvitation]);

  return (
    <>
      <audio ref={audioRef} src="/audio/invitation.mp3" loop/>
      {openInvitation ? (
        <div id="welcome-section" className="slide-top">
          <Flex gap="1" position="fixed" zIndex="3" left="5" bottom="5">
            <span className="button">
              <GiHamburgerMenu />
            </span>
            <span className="button" onClick={handleMuteAudio} style={{position:"relative",}}>
              <MdMusicNote />
              {
                isMuted && (
                  <div className="line"></div>
                )
              }
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
