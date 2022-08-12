import React from "react";
import { Flex } from "@chakra-ui/react";

interface IRounded {
  children: React.ReactNode;
  bg?: string;
}

const RoundedSection: React.FC<IRounded> = ({ children, bg = "primary" }) => {
  return (
    <Flex
      flexDir="column"
      bg={bg}
      borderTopRadius="75px"
      py="45px"
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
