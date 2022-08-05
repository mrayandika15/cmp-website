import { Flex, Heading, Text, Grid, Spinner, GridItem } from "@chakra-ui/react";
import React from "react";
import { CustomImage } from "../../../components";
import { IService } from "../../../pages/about";

interface IntroProps {
  data?: IService[];
  isLoading: boolean;
}

const IntroSection: React.FC<IntroProps> = ({ data, isLoading }) => {
  const resource = {
    data: { ...data },
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="full"
      h="full"
      px="25px"
      py="55px"
      flexDir="column"
    >
      <Heading variant="primary">Cipta Master Pradana</Heading>
      <Flex w="800px" flexDir="column" gap="15px" py="25px">
        <Text variant="primary" textAlign="justify">
          Telah berdiri sejak 2001 dengan nama awal UD. Cipta Master Perkasa di
          Bandung, kami berkembang menjadi produsen pakaian yang tidak hanya
          mengedepankan kualitas namun juga ketepatan waktu penyelesaian produk.
        </Text>
        <Text variant="primary" textAlign="justify">
          Kami dipercaya oleh ratusan merek pakaian, pemerintahan, dan sektor
          swasta dalam pembuatan produk pakaian, dan telah memiliki jangkuan
          pengiriman hingga ke seluruh Indonesia.
        </Text>
        <Text variant="primary" textAlign="justify">
          Kami melayani produksi pakaian dengan jenis yang luas, termasuk kaos,
          kemeja, hingga celana. Seperti teman, kami bertumbuh bersama klien,
          sehingga kami selalu siap untuk berkonsultasi dan menciptakan
          lingkungan yang positif.
        </Text>
      </Flex>

      <Grid
        templateAreas={`"header1 header1 header2 header3"
                        "main1 main2 main3 main3"`}
        placeItems="center"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <GridItem area={"header1"}>
              <CustomImage imgUrl={resource?.data[0]?.imgUrl} />
            </GridItem>
            <GridItem area={"header2"}>
              <CustomImage imgUrl={resource?.data[1]?.imgUrl} />
            </GridItem>
            <GridItem area={"header3"}>
              <CustomImage imgUrl={resource?.data[2]?.imgUrl} />
            </GridItem>
            <GridItem area={"main1"}>
              <CustomImage imgUrl={resource?.data[3]?.imgUrl} />
            </GridItem>
            <GridItem area={"main2"}>
              <CustomImage imgUrl={resource?.data[4]?.imgUrl} />
            </GridItem>
            <GridItem area={"main3"}>
              <CustomImage imgUrl={resource?.data[5]?.imgUrl} />
            </GridItem>
          </>
        )}
      </Grid>
    </Flex>
  );
};

export default IntroSection;
