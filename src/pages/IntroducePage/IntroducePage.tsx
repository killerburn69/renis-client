import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import BabyLogo from "../../imgs/logobaby.png";
const IntroducePage = () => {
  return (
    <Flex
      gap="10"
      flexDirection="column"
      justify="center"
      align="center"
      h="100vh"
      bg="secondary_color"
    >
      <Image src={BabyLogo} />
      <Flex gap="10">
        <Link
          display="block"
          px="6"
          fontSize="18"
          fontWeight="bold"
          py="2"
          opacity="0.5"
          bg="purpleButton.700"
          variant="linkFont"
          as={RouterLink}
          to="/signin"
        >
          Sign in
        </Link>
        <Link
          display="block"
          px="6"
          fontSize="18"
          fontWeight="bold"
          py="2"
          opacity="0.5"
          bg="purpleButton.700"
          variant="linkFont"
          as={RouterLink}
          to="/signup"
        >
          Register
        </Link>
      </Flex>
    </Flex>
  );
};

export default IntroducePage;
