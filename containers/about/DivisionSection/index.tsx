import { Heading, Image, Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { RoundedSection } from "../../../layouts";
import Carousel from "../../core/Carousel";
import { SwiperSlide } from "swiper/react";
import { IDivision } from "../../../pages/about";

type DivisionProps = {
  data?: IDivision[];
};

const DivisionSection: React.FC<DivisionProps> = ({ data }) => {
  return (
    <RoundedSection>
      <Heading variant="primary">Divisi Perusahaan</Heading>
      <Carousel>
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                overflow="hidden"
                w="593px"
                h="380px"
                position="relative"
                display="flex"
                justifyItems="center"
                alignItems="center"
                rounded="3xl"
              >
                <Text
                  position="absolute"
                  w="full"
                  h="full"
                  display="grid"
                  placeItems="center"
                  fontWeight="semibold"
                  fontSize="3xl"
                >
                  {item?.name}
                </Text>
                <Image src={item?.imgUrl} w="fit-content" h="fit-content" />
              </Box>
            </SwiperSlide>
          );
        })}
      </Carousel>
      <Flex
        flexDir="column"
        justifyItems="center"
        alignItems="center"
        gap="30px"
        py="30px"
      >
        <Heading variant="primary">Ada yang bisa dibantu ?</Heading>
        <Button variant="secondary">Kontak Kami</Button>
      </Flex>
    </RoundedSection>
  );
};

export default DivisionSection;
