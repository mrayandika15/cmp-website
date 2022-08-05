import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

interface IBrands {
  name: string;
  imgUrl: string;
}

type getBrandsType = {
  data: IBrands[];
};

const BrandSection: React.FC = () => {
  const [brandsImage, setBrandsImage] = React.useState<getBrandsType>();

  React.useEffect(() => {
    (async () => {
      await axios
        .get<getBrandsType>("/api/brands", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => setBrandsImage(response.data));
    })();
  }, []);

  return (
    <Flex
      flexDir="column"
      justify="center"
      alignItems="center"
      gap="25px"
      py="55px"
    >
      <Heading variant="primary">
        Merek yang Telah <br /> Bekerja Sama Dengan Kami
      </Heading>
      <Text textAlign="center" w="650px" variant="primary">
        Kami telah bekerja sama dengan ratusan merek dan perusahaan dalam
        penanganan produksi pakaian, hal ini membuat kami untuk terus bergerak
        cepat dan mendorong batasan dalam penyelesaian masalah.
      </Text>
      <Flex wrap="wrap" justify="center" gap="35px" w="850px">
        {brandsImage?.data.map((data, index) => {
          return (
            <Image
              src={data.imgUrl}
              key={index}
              w="fit-content"
              h="fit-content"
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default BrandSection;
