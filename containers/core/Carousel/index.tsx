import React from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Navigation } from "swiper";

import { Swiper } from "swiper/react";

interface ICarousel {
  name?: string;
  imgUrl?: string;
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <Flex w="full" h="full" justify="center">
      <Flex w="1200px">
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={2}
          navigation
        >
          {children}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Carousel;
