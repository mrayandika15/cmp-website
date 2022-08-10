import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const EndSection: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      w="full"
      h="full"
      alignItems="center"
      flexDir="column"
      gap="25px"
      py="55px"
    >
      <Heading variant="primary">Terima kasih</Heading>
      <Text variant="primary" w="900px" textAlign="center">
        Terima kasih sudah berkunjung, jika memiliki pertanyaan lebih lanjut
        atau ingin menjadwalkan meeting, silakan hubungi kami via Whatsapp yang
        tertera di bawah ini.
      </Text>
      <Button variant="primary">Hubungi Kami</Button>
    </Flex>
  );
};

export default EndSection;
