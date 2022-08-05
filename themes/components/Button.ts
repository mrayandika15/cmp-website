import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: "primary",
      color: "white",
      rounded: "3xl",
      cursor: "pointer",
    },

    secondary: {
      bg: "#104764",
      color: "white",
      rounded: "3xl",
      cursor: "pointer",
    },
  },
};

export default Button;
