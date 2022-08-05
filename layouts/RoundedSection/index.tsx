import React from "react";
import { Flex } from "@chakra-ui/react";

interface IRounded {
  children: React.ReactNode;
}

const RoundedSection: React.FC<IRounded> = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      bg="primary"
      borderTopRadius="75px"
      py="55px"
      px="25px"
      color="white"
      justify="center"
      alignItems="center"
      gap="25px"
    >
      {children}
    </Flex>
  );
};

export default RoundedSection;
