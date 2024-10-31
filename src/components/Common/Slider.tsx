import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Box, Image } from "@chakra-ui/react";

export default function Slider() {
  const items = [
    "/images/invitation-wedding-1.jpg",
    "/images/invitation-wedding-2.jpg",
    "/images/invitation-wedding-3.jpg",
    "/images/invitation-wedding-4.jpg",
    "/images/invitation-wedding-5.jpg",
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
