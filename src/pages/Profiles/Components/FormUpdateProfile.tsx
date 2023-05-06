import React, { useContext } from "react";
import {
  FormControl,
  Textarea,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Context } from "../Profile";
interface UpdateProps {
  show: boolean;
  setShow: (show: boolean) => void;
}
const FormUpdateProfile = (props: UpdateProps) => {
  const descValue = useContext(Context);
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    descValue?.setDescValue(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    props.setShow(false);
    alert("update thành công");
  };
  return (
    <Box border="2px solid #8682A7" borderRadius="lg">
      <FormControl p="4" as="form" onSubmit={handleSubmit}>
        <Textarea
          value={descValue?.descValue}
          onChange={handleChange}
          mb="5"
          placeholder="nhập đi"
          resize="none"
          h="32"
          size="md"
        />
        <Flex justify="flex-end" gap="3">
          <Button type="submit" borderRadius="lg">
            Update
          </Button>
          <Button
            onClick={() => props.setShow(false)}
            type="submit"
            borderRadius="lg"
          >
            Cancel
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormUpdateProfile;
