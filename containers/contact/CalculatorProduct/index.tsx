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
  Img,
} from "@chakra-ui/react";
import React from "react";
import Dropdown from "./Dropdown";
import { dataType, dataBahanKaos, dataBahanKemeja, dataPrinting } from "./Data";

interface data {
  name: string;
}

const CalculatorProduct: React.FC = () => {
  const [selectedValueType, setSelectedValueType] = React.useState<string>("");

  const [selectedValueKaos, setSelectedValueKaos] = React.useState<string>("");
  const [selectedValuePrint, setSelectedValuePrint] =
    React.useState<string>("");

  const [valueBahan, setValueBahan] = React.useState<data[]>([]);

  React.useEffect(() => {
    if (selectedValueType === "Kaos") {
      setValueBahan(dataBahanKaos);
    }

    if (selectedValueType === "Kemeja") setValueBahan(dataBahanKemeja);
    if (selectedValueType === "Celana") setValueBahan(dataBahanKemeja);
  }, [selectedValueType]);

  const handleDisabledPrint = () => {
    if (!selectedValueType) return true;
    if (selectedValueType === "Kemeja") return true;
    if (selectedValueType === "Celana") return true;
    if (selectedValueType) return false;
  };

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
          <Dropdown
            data={dataType}
            label="Jenis Pakaian"
            selectedValue={selectedValueType}
            setSelectedValue={setSelectedValueType}
          />

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
              <Dropdown
                data={valueBahan}
                label="Bahan"
                isDisabled={!selectedValueType}
                selectedValue={selectedValueKaos}
                setSelectedValue={setSelectedValueKaos}
              />

              <Dropdown
                data={dataPrinting}
                label="Printing"
                isDisabled={handleDisabledPrint()}
                selectedValue={selectedValuePrint}
                setSelectedValue={setSelectedValuePrint}
              />
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
