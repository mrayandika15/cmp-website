import { color, extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";

const overides = {
  colors,
  components: {
    Button,
    Heading,
    Text,
  },
};

export const themes = extendTheme(overides);
