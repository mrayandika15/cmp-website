import React from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

interface ICarousel {
  name?: string;
  imgUrl?: string;
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Data = {
  data?: ICarousel[];
};

const Carousel: React.FC<Data> = ({ data }) => {
  return (
    <Flex w="full" h="full" justify="center">
      <Flex w="1200px">
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={2}
          navigation
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide>
                <Box
                  key={index}
                  bg="secondary"
                  w="550px"
                  h="350px"
                  rounded="3xl"
                  display="grid"
                  placeItems="center"
                >
                  <Image src={item?.imgUrl} w="fit-content" h="fit-content" />
                  <Text color="white" fontWeight="semibold" fontSize="lg">
                    {item?.name}
                  </Text>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Carousel;
