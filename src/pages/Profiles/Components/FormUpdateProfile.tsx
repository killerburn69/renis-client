import React, { useEffect } from "react";
import {
  FormControl,
  Textarea,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE_INFO } from "../../../graphql/mutation/updateProfileInfo.gql";
import { Profiles } from "../../../models/interfaces";
import { UpdateProfileInput } from "../../../models/types";
import { useForm } from "react-hook-form";
import { GET_CURRENT_USER_PROFILE } from "../../../graphql/query/getCurrentUserProfile";
interface UpdateProps {
  show: boolean;
  setShow: (show: boolean) => void;
  description: string | undefined;
}
const FormUpdateProfile = (props: UpdateProps) => {
  const [updateProfileInfo, { data, error, loading }] = useMutation<
    { updateProfileInfo: Profiles },
    { updateProfileInput: UpdateProfileInput }
  >(UPDATE_PROFILE_INFO);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileInput>({
    defaultValues: {
      Description: props?.description,
    },
  });
  const onSubmit = async (datas: UpdateProfileInput) => {
    try {
      await updateProfileInfo({
        variables: {
          updateProfileInput: datas,
        },
        refetchQueries: [{ query: GET_CURRENT_USER_PROFILE }],
      });
    } catch (e: unknown) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (data) {
      alert(JSON.stringify(data));
      props.setShow(false);
    }
    if (error) {
      alert(JSON.stringify(data));
    }
  }, [data, error, props]);
  return (
    <Box border="2px solid #8682A7" borderRadius="lg">
      <FormControl p="4" as="form" onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          {...register("Description")}
          // value={props?.description}
          mb="5"
          placeholder="nhập đi"
          resize="none"
          h="32"
          size="md"
        />
        <Flex justify="flex-end" gap="3">
          <Button type="submit" borderRadius="lg" isLoading={loading}>
            Update
          </Button>
          <Button
            onClick={() => props.setShow(false)}
            borderRadius="lg"
            colorScheme="red"
          >
            Cancel
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormUpdateProfile;
