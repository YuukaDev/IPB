import { useColorMode, Icon } from "@chakra-ui/react";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Icon onClick={() => toggleColorMode()}>
      {colorMode === "light" ? <BsCloudMoon /> : <BsCloudSun />}
    </Icon>
  );
}

export default DarkMode;
