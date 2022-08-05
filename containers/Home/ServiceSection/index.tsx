import { Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { CustomImage } from "../../../components";

interface IService {
  name: string;
  imgUrl: string;
}

const ServiceSection: React.FC = () => {
  const [Service, setService] = React.useState<IService[]>();

  React.useEffect(() => {
    (async () => {
      await axios
        .get<IService[]>("/api/service", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => setService(response.data));
    })();
  }, []);

  console.log(Service);

  return (
    <Flex
      bg="secondary"
      w="full"
      color="white"
      py="55px"
      px="25px"
      h="fit-content"
      flexDir="column"
      alignItems="center"
      justify="center"
      gap="15px"
    >
      <Heading variant="primary">Layanan Kami</Heading>
      <Button variant="primary">Layanan</Button>

      <Flex wrap="wrap" justifyContent="space-between" w="full" px="65px">
        {Service?.map((item, index) => {
          return (
            <CustomImage
              key={index}
              name={item?.name}
              index={index}
              imgUrl={item?.imgUrl}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ServiceSection;
