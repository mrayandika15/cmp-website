import { color, extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";
import fonts from "./foundations/fonts";

const overides = {
  colors,
  fonts,
  components: {
    Button,
    Heading,
    Text,
  },
};

export const themes = extendTheme(overides);
