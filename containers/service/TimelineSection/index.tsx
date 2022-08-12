import { Flex, Heading, Text, Box, Img } from "@chakra-ui/react";
import React from "react";
import { RoundedSection } from "../../../layouts";

interface ITimeline {
  name: string;
  imgUrl: string;
}

const TimelineSection: React.FC = () => {
  const data: ITimeline[] = [
    {
      name: "Konsultasikan tentang kebutuhan produksimu, segala informasi tentang jenis pakaian, aksesoris, dan kuantitas dapat kamu diskusikan dengan kami.",
      imgUrl: "assets/icon/3D-icons/service-icon/1.png",
    },
    {
      name: "Kamu dapat berdiskusi dengan kami tentang perencanaan biaya produksi, yang tentunya besaran biaya bervariasi yang dapat disesuaikan dengan kebutuhanmu.",
      imgUrl: "assets/icon/3D-icons/service-icon/2.png",
    },
    {
      name: "Setelah merasa cocok dengan besaran perencanaan biaya, kami akan memberikan dokumen purchase order yang berisi tentang segala informasi termasuk, harga ,waktu penyelesaian, kuantitas produk, dan lain-lain.",
      imgUrl: "assets/icon/3D-icons/service-icon/3.png",
    },
    {
      name: "Pembayaran dapat dilakukan sesuai dengan kesepakatan yang terlampir di purchase order.",
      imgUrl: "assets/icon/3D-icons/service-icon/4.png",
    },
    {
      name: "Setelah tahap produksi dan pembayaran selesai, selanjutnya kami akan mengirimkan produkmu.",
      imgUrl: "assets/icon/3D-icons/service-icon/5.png",
    },
  ];

  return (
    <Flex flexDir="column" pt="30px">
      <Flex
        justify="center"
        alignItems="center"
        flexDir="column"
        py="10px"
        gap="10px"
      >
        <Heading variant="primary">Mekanisme Layanan</Heading>
        <Text variant="primary">
          Yuk pelajari cara bekerja sama dengan kami!
        </Text>
      </Flex>

      <RoundedSection>
        <Flex w="full" h="1800px" justify="center" position="relative">
          <Flex w="270px" h="full" position="relative">
            <Box
              w="3px"
              h="full"
              bg="white"
              position="absolute"
              right="-22px"
            ></Box>
            <Box
              w="15px"
              h="15px"
              bg="secondary"
              position="absolute"
              rounded="full"
              right="-28px"
              top="0"
            ></Box>

            <Box
              w="15px"
              h="15px"
              bg="secondary"
              position="absolute"
              rounded="full"
              right="-28px"
              bottom="0"
            ></Box>
          </Flex>

          <Flex
            flexDir="column"
            h="full"
            w="full"
            zIndex="docked"
            py="25px"
            gap="100px"
          >
            {/* Loop this item */}

            {data.map((item, index) => (
              <Flex gap="15" alignItems="center" w="full">
                <Box
                  rounded="full"
                  bg="secondary"
                  w="40px"
                  h="40px"
                  display="grid"
                  placeItems="center"
                  color="white"
                >
                  {index + 1}
                </Box>

                <Flex
                  bg="secondary"
                  w="420px"
                  h="248px"
                  borderRadius="60px"
                  justify="center"
                  alignItems="center"
                >
                  <Img src={item.imgUrl} w="fit-content" h="fit-content" />
                </Flex>

                <Text w="400px">{item.name}</Text>
              </Flex>
            ))}

            {/* /////////////////////////// */}
          </Flex>
        </Flex>
      </RoundedSection>
    </Flex>
  );
};

export default TimelineSection;
