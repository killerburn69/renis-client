import { Flex } from "@chakra-ui/react";
import React from "react";
import { backgroundOverlay } from "../theme/background/Background";
import { Spinner } from "@chakra-ui/react";
const Loading = () => {
  return (
    <Flex sx={backgroundOverlay}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purpleButton.500"
        size="xl"
      />
    </Flex>
  );
};

export default Loading;
