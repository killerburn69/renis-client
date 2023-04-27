import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import FormUpdateProfile from "./FormUpdateProfile";
import { Context } from "../Profile";

interface UpdateProps {
  show: boolean;
  setShow: (show: boolean) => void;
}
const DescriptionProfile = (props: UpdateProps) => {
  const descValue = useContext(Context);
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
        />
      ) : (
        <Text mt="2" fontSize="sm">
          {descValue?.descValue}
        </Text>
      )}
    </Box>
  );
};

export default DescriptionProfile;
