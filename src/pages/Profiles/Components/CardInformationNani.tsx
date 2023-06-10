import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import BabyAvatar from "../../../imgs/babybg.jpeg";
import MapIcon from "../../../imgs/locationsvg.svg";
import Certificate from "../../../imgs/mortarboard 1.svg";
import Hobby from "../../../imgs/guitar-instrument 1.svg";
import { EditIcon } from "@chakra-ui/icons";
import Star from "../../../components/Star";
import { bgCardInformationProfile } from "../../../theme/background/Background";
import { Profile, UpdateProfileInput } from "../../../models/types";
import { useMutation } from "@apollo/client";
import { Profiles } from "../../../models/interfaces";
import { UPDATE_PROFILE_INFO } from "../../../graphql/mutation/updateProfileInfo.gql";
import { useForm } from "react-hook-form";
import { GET_CURRENT_USER_PROFILE } from "../../../graphql/query/getCurrentUserProfile";
import EditFieldCardInformation from "./EditFieldCardInformation";
import ModalUploadAvatar from "./ModalUploadAvatar";
interface Fixed {
  fixed: boolean;
  data: Profile | undefined;
}
const CardInformationNani = (props: Fixed) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [updateProfileInfo, { data, error }] = useMutation<
    { updateProfileInfo: Profiles },
    { updateProfileInput: UpdateProfileInput }
  >(UPDATE_PROFILE_INFO);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileInput>({
    defaultValues: {
      Hobby: props.data?.Hobby,
      Education: props.data?.Education,
      Map: props.data?.Map,
      // Description: props.data?.Description,
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
      toast({
        title: `Update information successfully`,
        status: "success",
        isClosable: true,
        position: "top-right",
      });
    }
    if (error) {
      toast({
        title: `Some thing wrong ${error}`,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    }
  }, [error, data, toast]);
  return (
    <Box
      position={props.fixed ? "fixed" : "relative"}
      pl={props.fixed ? "160px" : "0"}
      top={props.fixed ? "52" : "0"}
      mt={props.fixed ? "6" : "0"}
    >
      <Box sx={bgCardInformationProfile}>
        {/* <ModalUploadAvatar isOpen={isOpen} onClose={onClose} /> */}
        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection="column" align="center">
            <Star star={4} />
            <Box
              w="36"
              h="36"
              borderRadius="full"
              overflow="hidden"
              position="relative"
              mb="5"
              mt="2"
            >
              <Image
                src={BabyAvatar}
                w="full"
                h="full"
                objectFit="cover"
              ></Image>
              <IconButton
                // onClick={onOpen}
                position="absolute"
                color="white"
                fontSize="md"
                bottom="4"
                right="5"
                variant="iconModify"
                aria-label="Edit avatar"
                icon={<EditIcon />}
              />
            </Box>
            <Text
              fontWeight="bold"
              fontSize="18"
              color="secondary_color"
              mb="1"
            >
              {props.data?.Nick_Name}
            </Text>
            <Text fontSize="14" color="grey.800" mb="4">
              {props.data?.Profile_Name}
            </Text>
            <Box borderBottom="1px solid #E8E8E8" w="full">
              <Flex>
                <Box pb="2" maxW="52" m="auto">
                  <EditFieldCardInformation
                    icon={MapIcon}
                    register={{ ...register("Map") }}
                    text={props.data?.Map}
                  />
                  <EditFieldCardInformation
                    icon={Certificate}
                    register={{ ...register("Education") }}
                    text={props.data?.Education}
                  />
                  <EditFieldCardInformation
                    icon={Hobby}
                    register={{ ...register("Hobby") }}
                    text={props.data?.Hobby}
                  />
                </Box>
                <IconButton
                  variant="iconModify"
                  minW="0"
                  fontSize="md"
                  aria-label="Edit information"
                  icon={<EditIcon />}
                />
              </Flex>
            </Box>
            <Button
              variant="sendMatch"
              px="2"
              py="1"
              fontWeight="400"
            >
              Send Match
            </Button>
          </Flex>
        </FormControl>
      </Box>
      {/* <EditInformationNani/> */}
    </Box>
  );
};

export default CardInformationNani;
