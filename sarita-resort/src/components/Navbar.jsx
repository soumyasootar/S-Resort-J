import {
  Button,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack p={5}>
        <Image src={logo}/>
        <Spacer />
        <Stack direction="row" w={"30%"} margin={"auto"}>
          <Link>Home</Link>
          <Spacer />
          <Link>About</Link>
          <Spacer />
          <Link>Room</Link>
          <Spacer />
          <Link>Explore</Link>
          <Spacer />
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "☀️" : "🌙"}
          </Button>
          <Spacer />
        </Stack>
      </HStack>
    </>
  );
};

export default Navbar;
