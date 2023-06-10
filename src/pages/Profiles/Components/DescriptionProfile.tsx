import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import FormUpdateProfile from "./FormUpdateProfile";

interface UpdateProps {
  show: boolean;
  setShow: (show: boolean) => void;
  data: string | undefined;
}
const DescriptionProfile = (props: UpdateProps) => {
  return (
    <Box w="full">
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="secondary_color"
        cursor="pointer"
      >
        More about me!
      </Text>
      {props.show ? (
        <FormUpdateProfile
          show={props.show}
          setShow={props.setShow}
          description={props?.data}
        />
      ) : (
        <Text mt="2" fontSize="sm">
          {props?.data}
        </Text>
      )}
    </Box>
  );
};

export default DescriptionProfile;
