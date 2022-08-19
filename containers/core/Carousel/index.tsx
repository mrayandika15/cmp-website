import React from "react";

import { Flex } from "@chakra-ui/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { Swiper } from "swiper/react";

interface ICarousel {
  name?: string;
  imgUrl?: string;
}
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/autoplay";

type CarouselProps = {
  children: React.ReactNode;
  view?: number;
  width?: string;
  navigation?: boolean;
  autoplay?: any;
};

SwiperCore?.use([Navigation, Autoplay]);

const Carousel: React.FC<CarouselProps> = ({
  children,
  view = 2,
  width = "1200px",
  navigation = true,
  autoplay = { delay: 4000 },
}) => {
  const swiperRef = React.useRef<SwiperCore>();

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <Flex w="full" h="full" justify="center" onMouseEnter={handleMouseEnter}>
      <Flex w={width}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={view}
          autoplay={autoplay}
          loop={true}
          navigation={navigation}
          onInit={onInit}
        >
          {children}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Carousel;
