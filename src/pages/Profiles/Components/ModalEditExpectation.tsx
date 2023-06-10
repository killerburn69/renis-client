import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UPDATE_EXPECTATION } from "../../../graphql/mutation/updateExpectation";
import { GET_EXPECTATION } from "../../../graphql/query/getExpectation";
import { ExpectationResponse } from "../../../models/interfaces";
import {
  Expectation,
  UpdateExpectationInput,
} from "../../../models/types";
interface EditModal {
  isOpen: boolean;
  onClose: () => void;
  expectation: Expectation | undefined;
  dataUserId: string | undefined;
}
const ModalEditExpectation = (props: EditModal) => {
  const userID = localStorage.getItem("userid");
  const toast = useToast();
  const [updateExpectation, { data, error, loading }] = useMutation<
    { updateExpectation: Expectation },
    { updateExpectation: UpdateExpectationInput }
  >(UPDATE_EXPECTATION);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateExpectationInput>({
    defaultValues: {
      Expectation_ID: props.expectation?.Expectation_ID,
      Age: props.expectation?.Age,
      Characteristics: props.expectation?.Characteristics,
      Distance: props.expectation?.Distance,
      Paid: props.expectation?.Paid,
      Type: props.expectation?.Type,
    },
  });
  const onSubmit = async (datas: UpdateExpectationInput) => {
    console.log(datas);
    try {
      await updateExpectation({
        variables: {
          updateExpectation: {
            Expectation_ID: props.expectation?.Expectation_ID ?? "",
            Age: +datas.Age,
            Characteristics: datas.Characteristics,
            Distance: +datas.Distance,
            Paid: +datas.Paid,
            Type: datas.Type,
          },
        },
        refetchQueries: [
          {
            query: GET_EXPECTATION,
            variables: {
              userId: props.dataUserId
                ? props.dataUserId
                : JSON.parse(`"${userID}"`),
            },
          },
        ],
      });
    } catch (e: unknown) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (data) {
      toast({
        title: `Update successfully`,
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      props.onClose();
    }
    if (error) {
      toast({
        title: `Some thing wrong ${error}`,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    }
  }, [data, error, toast]);
  return (
    <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Characteristics</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <FormLabel>Age</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Age"
                  type="number"
                  {...register("Age")}
                />
                <InputRightAddon children="age" />
              </InputGroup>
            </Box>
            <Box mt="4">
              <FormLabel>Characteristics</FormLabel>
              <Input
                placeholder="Naughty,..."
                {...register("Characteristics")}
              />
            </Box>
            <Box mt="4">
              <FormLabel>Distance</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Distance"
                  type="number"
                  {...register("Distance")}
                />
                <InputRightAddon children="km" />
              </InputGroup>
            </Box>
            <Box mt="4">
              <FormLabel>Type</FormLabel>
              <Input {...register("Type")} />
            </Box>
            <Box mt="4">
              <FormLabel>Paid</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Money"
                  type="number"
                  {...register("Paid")}
                />
                <InputRightAddon children="$" />
              </InputGroup>
            </Box>
            <ModalFooter>
              <Button
                colorScheme="purpleButton"
                mr={3}
                type="submit"
                isLoading={loading}
              >
                Save
              </Button>
              <Button onClick={props.onClose}>Cancel</Button>
            </ModalFooter>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditExpectation;
