import { Flex, FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import { bgEditInformationProfile } from "../../../theme/background/Background";

const EditInformationNani = () => {
  return (
    <Flex sx={bgEditInformationProfile}>
      <FormControl mx="auto" w="-moz-fit-content">
        <FormLabel>Update Profile Nani</FormLabel>
      </FormControl>
    </Flex>
  );
};

export default EditInformationNani;
