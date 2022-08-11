import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <Flex
      w="full"
      h="350px"
      bg="secondary"
      p="25px"
      color="white"
      justify="space-between"
    >
      <Flex flexDir="column" w="290px" gap="17px">
        <Image src="/assets/icon/logo.png" w="199px" h="51px"></Image>
        <Text>
          CV. Cipta Master Pradana adalah perusahaan produsen pakaian yang
          terletak di Bandung, Jawa Barat.
        </Text>
        <Heading fontWeight="semibold" fontSize="lg">
          Jam Opersaional :
        </Heading>
        <Text>Jam 9:00 - 18:00 WIB </Text>
      </Flex>

      <Flex flexDir="column" w="300px" gap="25px">
        <Flex flexDir="column">
          <Heading fontWeight="semibold" fontSize="lg">
            Alamat
          </Heading>
          <Text>
            Jl. Sukamenak No.82, Sukamenak, Kec. Margahayu, Kabupaten Bandung,
            Jawa Barat 40227
          </Text>
        </Flex>

        <Flex flexDir="column">
          <Heading fontWeight="semibold" fontSize="lg">
            No Telepon
          </Heading>
          <Text>022 - 5443 1119</Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" w="150px">
        <Heading fontWeight="semibold" fontSize="lg">
          Informasi
        </Heading>
        <Link onClick={() => router.push("/about")}>Tentang Kami</Link>
        <Link onClick={() => router.push("/contact")}>Kontak</Link>
      </Flex>

      <Flex flexDir="column" w="150px">
        <Heading fontWeight="semibold" fontSize="lg">
          Produk & Layanan
        </Heading>
        <Link onClick={() => router.push("/product")}>Produk</Link>
        <Link onClick={() => router.push("/service")}>Layanan</Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
