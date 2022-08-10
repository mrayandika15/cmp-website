import React from "react";
import { RoundedSection } from "../../../layouts";
import { Heading, Box } from "@chakra-ui/react";

const Location: React.FC = () => {
  return (
    <RoundedSection bg="secondary">
      <Heading variant="primary">Lokasi Kami</Heading>
      <Box w="980px" h="488px" rounded="3xl" overflow="hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126741.35905488649!2d107.51577255683534!3d-6.930290822190845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9aae9daee8b%3A0xc21a7453fee65845!2sCipta%20Master%20Pradana!5e0!3m2!1sid!2sid!4v1660105516285!5m2!1sid!2sid"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </Box>
    </RoundedSection>
  );
};

export default Location;
