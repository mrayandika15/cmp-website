import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { RoundedSection } from "../../../layouts";

const TimelineSection: React.FC = () => {
  return (
    <Flex flexDir="column" py="55px">
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
        <Text>timeline here</Text>
      </RoundedSection>
    </Flex>
  );
};

export default TimelineSection;
