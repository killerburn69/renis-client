import {
  Flex,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { UseFormRegisterReturn } from "react-hook-form";
import { bgEditCardProfile } from "../../../theme/background/Background";
interface EditField {
  icon: string;
  register: UseFormRegisterReturn<"Map" | "Education" | "Hobby">;
  text: string | undefined;
}
const EditFieldCardInformation = (props: EditField) => {
  const [showEdit, isShowEdit] = useState(false);
  const [showInput, isShowInput] = useState(false);
  const openEdit = () => {
    isShowEdit(true);
  };
  const closeEdit = () => {
    isShowEdit(false);
  };
  const openInput = () => {
    isShowInput(true);
    isShowEdit(false);
  };
  const closeInput = () => {
    isShowInput(false);
  };
  useEffect(() => {
    isShowInput(false);
  }, [props.text]);
  return (
    <Flex
      textAlign="left"
      mb="3"
      mx="2"
      onMouseEnter={!showInput ? openEdit : undefined}
      onMouseLeave={!showInput ? closeEdit : undefined}
      cursor="pointer"
      align="center"
    >
      <Image src={props.icon} boxSize="4" mr="2" />
      {showInput ? (
        <InputGroup>
          <Input {...props.register} pr="4rem" />
          <InputRightElement w="fit-content" px="2">
            <IconButton
              type="submit"
              colorScheme="teal"
              aria-label="Call Segun"
              size="xs"
              borderRadius="full"
              mr="1"
              icon={<CheckCircleIcon />}
            />
            <IconButton
              onClick={closeInput}
              colorScheme="red"
              aria-label="Call Segun"
              borderRadius="full"
              size="xs"
              icon={<SmallCloseIcon />}
            />
          </InputRightElement>
        </InputGroup>
      ) : (
        <Box position="relative">
          <Text fontSize="sm" color="grey.800">
            {props.text}
          </Text>
          {showEdit && (
            <Text sx={bgEditCardProfile} onClick={openInput}>
              Edit
            </Text>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default EditFieldCardInformation;
