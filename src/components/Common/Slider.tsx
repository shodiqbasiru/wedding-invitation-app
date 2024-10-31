import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Box, Image } from "@chakra-ui/react";

export default function Slider() {
  const items = [
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497",
    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <Box position="relative">
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          boxSizing: "border-box",
          justifyContent: "space-between",
          width: "100%",
          userSelect: "none",
        }}
      >
        <button
          ref={prevRef}
          style={{
            position: "absolute",
            right: "120px",
            bottom: "-50px",
            alignSelf: "center",
            backgroundColor: "#F9F7F4",
            border: "1px solid rgb(26,27,29)",
            cursor: "pointer",
            height: "30px",
            lineHeight: "1",
            textAlign: "center",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsArrowLeft />
        </button>
        <button
          ref={nextRef}
          style={{
            position: "absolute",
            right: "2.5rem",
            bottom: "-50px",
            alignSelf: "center",
            backgroundColor: "#F9F7F4",
            border: "1px solid rgb(26,27,29)",
            cursor: "pointer",
            height: "30px",
            lineHeight: "1",
            textAlign: "center",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsArrowRight />
        </button>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={20}
          modules={[EffectCoverflow, Navigation, Pagination]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="cover"
                width="300px"
                height="400px"
                objectFit="cover"
                objectPosition="center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
}
