import React from "react";
import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";

const ProductOver: React.FC = () => {
  return (
    <Flex flexDir="column" justify="center" alignItems="center">
      <Heading textAlign="center" variant="primary" w="970px" py="55px">
        Dengan output produk hingga <b style={{ color: "#FDC010" }}>80.000 </b>
        pcs per bulan dan didukung oleh <b style={{ color: "#FDC010" }}>350 </b>
        karyawan, kami siap membantu kamu dan merekmu, dalam pembuatan produk
        pakaian yang berkualitas.
      </Heading>

      <Box
        w="980px"
        h="634px"
        bg="primary"
        mt="25px"
        mb="55px"
        rounded="3xl"
        color="white"
        display="flex"
        justifyItems="center"
        alignItems="center"
        px="55px"
        gap="25px"
      >
        <Image src="assets/img/product-page/1.png" rounded="3xl" />
        <Flex flexDir="column" gap="25px">
          <Heading variant="primary" textAlign="left">
            Kaos
          </Heading>
          <Text variant="primary">
            Model menggunakan kain 24s yang tebal namun tetap dingin dan nyaman
            digunakan, juga didukung dengan penggunaan printing DTF yang dapat
            menampilkan gambar dengan detail dan tekstur yang menyerap ke kain,
            sehingga hasil print dapat bertahan lama meskipun dicuci berulang
            kali.
          </Text>

          <Text variant="primary">
            Selain jenis kain dan printing yang digunakan model, kami juga
            menyediakan pilihan jenis kain lain dari mulai 20s hingga 30s, juga
            sablon printing plastisol dan discharge.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductOver;
