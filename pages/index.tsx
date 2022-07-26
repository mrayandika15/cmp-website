import { Flex, Spinner, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Flex
      justify="center"
      w="100%"
      h="100vh"
      align="center"
      flexDir="column"
      gap="25px"
    >
      <Text fontWeight="bold" fontSize="5xl" color="blue.400">
        Developing ...
      </Text>

      <Spinner size="xl" color="blue.400" />
    </Flex>
  );
};

export default Home;
