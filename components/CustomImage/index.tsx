import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface ICustom {
  name?: string;
  index?: number;
  imgUrl?: string;
  w?: string;
  h?: string;
}

const CustomImage: React.FC<ICustom> = ({
  name,
  index,
  imgUrl,
  w = "fit-content",
  h = "fit-content",
}) => {
  return (
    <Box
      key={index}
      w={w}
      h={h}
      rounded="2xl"
      cursor="pointer"
      overflow="hidden"
      position="relative"
      role="group"
    >
      <Box
        position="absolute"
        w="full"
        h="full"
        bg="blackAlpha.600"
        display="flex"
        transition="opacity 200ms"
        opacity="0"
        _groupHover={{ opacity: "100" }}
        justifyContent="center"
        alignItems="center"
        fontSize="lg"
      >
        {name}
      </Box>

      <Image src={imgUrl} w={w} h={h} />
    </Box>
  );
};

export default CustomImage;
