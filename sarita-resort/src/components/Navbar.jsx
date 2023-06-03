import {
  Button,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  useColorMode,useColorModeValue
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack p={5} bg={useColorModeValue("white","dark")} margin={"auto"}>
        <Image src={logo}/>
        <Spacer />
        <Stack direction="row" w={"40%"} margin={"auto"} alignItems={"center"}>
          <Link href="/">Home</Link>
          <Spacer />
          <Link href="/about">About</Link>
          <Spacer />
          <Link href="/rooms">Room</Link>
          <Spacer />
          <Link href="/explore">Explore</Link>
          <Spacer />
          <Link href="/contact">Contact</Link>
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
