import React from "react";
import {
  Flex,
  Heading,
  Box,
  Image,
  Text,
  IconButton,
  Img,
} from "@chakra-ui/react";
import Carousel from "../../core/Carousel";
import { SwiperSlide } from "swiper/react";

const data = [
  {
    name: "Kaos",
    desc1:
      "Model menggunakan kain 24s yang tebal namun tetap dingin dan nyaman digunakan, juga didukung dengan penggunaan printing DTF yang dapat menampilkan gambar dengan detail dan tekstur yang menyerap ke kain, sehingga hasil print dapat bertahan lama meskipun dicuci berulang kali.",
    desc2:
      "Selain jenis kain dan printing yang digunakan model, kami juga menyediakan pilihan jenis kain lain dari mulai 20s hingga 30s, juga sablon printing plastisol dan discharge.",
    imgUrl: "assets/img/product-page/1.png",
  },
  {
    name: "Kemeja",
    desc1:
      "Model menggunakan kemeja jenis chinese collar, yang dapat digunakan juga sebagai busana muslim. Dengan menggunakan bahan kain oxford yang tebal namun tetap halus.",
    desc2:
      "Kami juga menyediakan pilihan kain yang beragam sebagai bahan kemeja seperti, oxford, katun, dan flannel. Tidak lupa dengan bentuk dari kemeja yang dapat disesuaikan juga dengan kebutuhanmu.",
    imgUrl: "assets/img/product-page/2.png",
  },
  {
    name: "Celana",
    desc1:
      "Model menggunakan celana dengan jenis chino, yang menggunakan jenis kain drill dengan karakteristik tebal dan tidak gampang kusut, kain drill memiliki pilihan warna yang paling beragam dibandingkan dengan celana berbahan lain.",
    desc2:
      "Pilihan jenis celana selain chino yang kami sediakan adalah cargo, formal, hingga jeans. Sementara untuk pilihan bahan kami menyediakan bahan seperti corduroy, katun, canvas, dan drill.",
    imgUrl: "assets/img/product-page/3.png",
  },
  {
    name: "Semi-dress",
    desc1:
      "Model menggunakan semi-dress muslimah dengan bahan kain katun sehingga tekstur yang dihasilkan halus dan tidak panas bahkan saat digunakan bersama hijab.",
    desc2:
      "Kami menyediakan berbagai model semi-dress yang dapat dipilih sesuai kebutuhan, dan juga pilihan kain yang beragam seperti katun, linen, satin, dan sifon. ",
    imgUrl: "assets/img/product-page/4.png",
  },
  {
    name: "Baju Tidur",
    desc1:
      "Model menggunakan baju tidur yang menggunakan bahan kain katun yang dingin dan dapat menyerap keringat, jenis kain ini paling banyak digunakan sebagai bahan baju tidur karena kenyamanan dan kehalusan kain.",
    desc2:
      "Kami juga menyediakan pilihan kain yang dapat digunakan sebagai kain dasar baju tidur yaitu, katun, dan rayon.",
    imgUrl: "assets/img/product-page/5.png",
  },
];

const ProductOver: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handlePrev = () => {
    setValue((prevState) => prevState - 1);

    if (value === 0) {
      setValue(4);
    }
  };

  const handleNext = () => {
    setValue((prevState) => prevState + 1);

    if (value === 4) {
      setValue(0);
    }
  };

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
        <Carousel view={1} width="980px">
          {data.map((item, index) => (
            <SwiperSlide>
              <Flex padding="55px" gap="10px" alignItems="center">
                <Image src={item.imgUrl} rounded="3xl" key={index} />
                <Flex flexDir="column" gap="25px">
                  <Heading variant="primary" textAlign="left">
                    {item.name}
                  </Heading>
                  <Text variant="primary">{item.desc1}</Text>

                  <Text variant="primary">{item.desc2}</Text>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default ProductOver;
