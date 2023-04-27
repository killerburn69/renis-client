import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import BabyLogo from "../../imgs/logobaby.png";
import { bgButtonIntroducePage } from "../../theme/background/Background";
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
          sx={bgButtonIntroducePage}
          as={RouterLink}
          to="/signin"
          variant="linkFont"
        >
          Sign in
        </Link>
        <Link
          sx={bgButtonIntroducePage}
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
