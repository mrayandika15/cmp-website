import React from "react";
import {
  Menu,
  MenuButton,
  Flex,
  Img,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
} from "@chakra-ui/react";

interface data {
  name: string;
}

type propsDropdown = {
  data?: data[];
  label?: string;
  setSelectedValue: any;
  selectedValue: any;
  isDisabled?: any;
};

const Dropdown: React.FC<propsDropdown> = ({
  data,
  label,
  selectedValue,
  setSelectedValue,
  isDisabled,
}) => {
  return (
    <Menu variant="ghost">
      <MenuButton
        role="button"
        _hover={{ background: "secondary" }}
        _active={{ background: "blue.900" }}
        bg="#104764"
        as={Button}
        w="fit-content"
        textAlign="left"
        disabled={isDisabled}
      >
        <Flex gap="10px" alignItems="center" w="fit-content">
          {selectedValue ? selectedValue : label}

          <Img
            src="/assets/icon/dropdown.png"
            w="fit-content"
            h="fit-content"
          />
        </Flex>
      </MenuButton>
      <MenuList
        zIndex="popover"
        bg="secondary"
        border="none"
        px="25px"
        py="20px"
      >
        {data?.map((item, index) => (
          <Flex flexDir="column">
            <MenuItem
              color="white"
              onClick={() => setSelectedValue(item.name)}
              key={index}
              _hover={{ background: "whiteAlpha.100" }}
              _active={{ background: "whiteAlpha.100" }}
              _focus={{ background: "whiteAlpha.100" }}
              fontWeight="semibold"
            >
              {item?.name}
            </MenuItem>
            <MenuDivider />
          </Flex>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
