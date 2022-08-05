import { Flex, Heading, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Carousel from "../../core/Carousel";

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
      <Carousel data={resource} />
    </Flex>
  );
};

export default ScaleSection;
