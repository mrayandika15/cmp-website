import { Flex, Heading, Button, Image, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Carousel from "../../core/Carousel";
import { SwiperSlide } from "swiper/react";

interface IScale {
  name: string;
  imgUrl: string;
}

const ScaleSection: React.FC = () => {
  const [resource, setResource] = React.useState<IScale[]>();

  React.useEffect(() => {
    (async () => {
      await axios.get("/api/3D/scale").then((response) => {
        setResource(response.data);
      });
    })();
  }, []);

  return (
    <Flex
      w="full"
      h="fit-content"
      py="55px"
      px="25px"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      color="black"
      gap="15px"
    >
      <Heading variant="primary">Skala Kami</Heading>
      <Button variant="primary">Kontak</Button>
      <Carousel>
        {resource?.map((item, index) => {
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
      </Carousel>
    </Flex>
  );
};

export default ScaleSection;
