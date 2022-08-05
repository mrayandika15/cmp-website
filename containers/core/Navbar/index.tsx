import { Flex, Heading, Image, Link, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useMainContext } from "../../../context/MainContext";

const Navbar: React.FC = () => {
  const { navbar } = useMainContext();

  const router = useRouter();

  return (
    <Flex
      width="full"
      h="750px"
      position="relative"
      px="25px"
      py="45px"
      zIndex="docked"
    >
      {/* bg */}
      <Image
        position="absolute"
        w="full"
        h="full"
        inset="0"
        zIndex="hide"
        src={navbar.bgurl}
      />

      {/* content */}
      <Flex
        w="full"
        h="full"
        position="absolute"
        inset="0"
        bg="rgba(0, 0, 0, 0.7)"
        justify="center"
        alignItems="center"
        color="white"
        flexDir="column"
        gap="15px"
      >
        <Flex
          w="full"
          h="350px"
          justify="center"
          alignItems="center"
          color="white"
          flexDir="column"
          gap="20px"
          zIndex="modal"
        >
          <Heading variant="primary">{navbar.header}</Heading>
          <Text w="550px" textAlign="center" variant="primary">
            {navbar.subHeader}
          </Text>
          {navbar.hasButton ? (
            <Button variant="primary">{navbar.buttonLabel}</Button>
          ) : null}
        </Flex>
      </Flex>

      {/* navbar */}
      <Flex w="full" zIndex="docked">
        <Flex w="399px" h="51px">
          <Image src="/assets/icon/logo.png"></Image>
        </Flex>

        <Flex
          color="white"
          h="51px"
          w="full"
          fontWeight="semibold"
          alignItems="center"
          justifyContent="space-around"
        >
          <Link
            onClick={() => router.push("/")}
            _hover={{ textDecoration: "none" }}
          >
            Beranda
          </Link>
          <Link
            onClick={() => router.push("/about")}
            _hover={{ textDecoration: "none" }}
          >
            Tentang Kami
          </Link>
          <Link _hover={{ textDecoration: "none" }}>Produk</Link>
          <Link _hover={{ textDecoration: "none" }}>Layanan</Link>
          <Link _hover={{ textDecoration: "none" }}>Kontak</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
