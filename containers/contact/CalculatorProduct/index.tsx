import {
  Flex,
  Heading,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React from "react";

const CalculatorProduct: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      gap="12px"
      w="full"
      h="full"
      justifyContent="center"
      alignItems="center"
      py="55px"
    >
      <Heading variant="primary">Kalkulator Perkiraan Biaya Produksi</Heading>
      <Text pb="55px" variant="primary" textAlign="center">
        Hitung biaya produksi yang dapat disesuaikan dengan spesifikasi dan
        kebutuhan produksimu
      </Text>

      <Box
        bg="primary"
        w="980px"
        h="463px"
        rounded="60px"
        display="flex"
        flexDir="column"
        alignItems="center"
        color="white"
        p="25px"
      >
        <Heading variant="primary">Kalkulator Perkiraan Biaya </Heading>

        <Flex gap="15px" w="full" px="10px" alignItems="center" py="15px">
          {/* Menu 1 */}
          <Menu>
            <MenuButton
              _hover={{ background: "secondary" }}
              _active={{ background: "blue.900" }}
              bg="#104764"
              as={Button}
              w="150px"
              textAlign="left"
            >
              Jenis Pakaian
            </MenuButton>
            <MenuList zIndex="popover">
              <MenuItem color="black">Cotton Combed 20s, 24s, 30s</MenuItem>
              <MenuItem color="black">Kemeja</MenuItem>
            </MenuList>
          </Menu>

          <Text variant="primary">
            Jenis pakaian drop down ( Kaos, Kemeja, Celana)
          </Text>
        </Flex>

        <Flex gap="15px" w="full" justifyContent="space-between" px="15px">
          <Flex flexDir="column" gap="2px" w="full" h="full">
            <Text fontSize="36px">100 Lusin</Text>

            <Slider id="slider" defaultValue={5} min={0} max={100}>
              <SliderMark value={5} fontSize="sm" mt="10px">
                24 Lusin
              </SliderMark>

              <SliderMark value={85} w="full" mt="10px" fontSize="sm">
                200 Lusin
              </SliderMark>
              <SliderTrack bg="white">
                <SliderFilledTrack bg="secondary" />
              </SliderTrack>

              <SliderThumb boxSize={4} bg="#104764" />
            </Slider>

            <Flex flexDir="column" gap="50px" mt="50px">
              {/* Menu 1 */}
              <Menu>
                <MenuButton
                  _hover={{ background: "secondary" }}
                  _active={{ background: "blue.900" }}
                  bg="#104764"
                  as={Button}
                  w="150px"
                  textAlign="left"
                >
                  Bahan
                </MenuButton>
                <MenuList>
                  <MenuItem color="black">Download</MenuItem>
                </MenuList>
              </Menu>

              {/* Menu 2 */}

              <Menu>
                <MenuButton
                  _hover={{ background: "secondary" }}
                  bg="#104764"
                  _active={{ background: "blue.900" }}
                  as={Button}
                  w="150px"
                  textAlign="left"
                >
                  Printing
                </MenuButton>
                <MenuList>
                  <MenuItem color="black">Download</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          <Flex
            flexDir="column"
            w="full"
            h="265px"
            justifyContent="center"
            alignItems="center"
          >
            <Flex flexDir="column" w="fit-content" h="fit-content" gap="10px">
              <Text fontWeight="semibold">Biaya Produksimu adalah</Text>
              <Flex fontWeight="semibold" gap="10px">
                <Text fontSize="sm">Rp</Text>
                <Text fontSize="5xl">100.000.000</Text>
              </Flex>

              <Text>*harga yang terlampir sudah termasuk pajak</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CalculatorProduct;
