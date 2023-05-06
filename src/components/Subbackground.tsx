import { Box } from "@chakra-ui/react";
import React from "react";
import { subBackground } from "../theme/background/Background";
import { ChildrenProps } from "../models/interfaces";
const Subbackground = ({ children }: ChildrenProps) => {
  return <Box sx={subBackground}>{children}</Box>;
};

export default Subbackground;
