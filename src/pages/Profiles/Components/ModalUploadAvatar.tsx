import {
  Image,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Upload from "../../../imgs/upload-svgrepo-com.svg";
import { UploadImageInput } from "../../../models/types";
import { useMutation } from "@apollo/client";
import { ProfileImages } from "../../../models/interfaces";
import { UPLOAD_AVATAR } from "../../../graphql/mutation/uploadAvatar";
interface ModalUploadImgaeAvatar {
  isOpen: boolean;
  onClose: () => void;
}
const ModalUploadAvatar = (props: ModalUploadImgaeAvatar) => {
  const toast = useToast();
  const [isImage, setIsImage] = useState<string | null>(null);
  const [isFileImage, setIsFileImage] = useState("");
  const [uploadAvatarImage, { data, loading, error }] = useMutation<
    { uploadAvatar: ProfileImages },
    { images: UploadImageInput }
  >(UPLOAD_AVATAR);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UploadImageInput>({
    defaultValues: {
      Avatar: "",
    },
  });
  const onSubmit = async (datas: UploadImageInput) => {
    datas.Avatar = isFileImage;
    console.log(datas);
    try {
      await uploadAvatarImage({
        variables: {
          images: datas,
        },
      });
    } catch (e: unknown) {
      console.log(e);
    }
  };
  const onChange = (e: any) => {
    const file = e.target.files[0];
    setIsImage(URL.createObjectURL(file));
    setIsFileImage(file);
    console.log(file);
  };
  useEffect(() => {
    if (data) {
      toast({
        title: "Upload Image Succesfully",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      props.onClose();
    }
    if (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      props.onClose();
    }
  }, [error, data, toast]);
  return (
    <Modal
      size="lg"
      onClose={props.onClose}
      isOpen={props.isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl
            as="form"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignContent="center"
              border="2px dashed #1475cf"
              h="max-content"
              borderRadius="5px"
              p="2"
            >
              <FormLabel
                htmlFor="upload"
                textAlign="center"
                h="full"
                m="0"
                cursor="pointer"
              >
                {isImage === null ? (
                  <Image src={Upload} margin="0 auto" />
                ) : (
                  <Image src={isImage} margin="0 auto" />
                )}
              </FormLabel>
              <Text textAlign="center" fontSize="xl" fontWeight="600">
                Upload Your Image
              </Text>
              <Input
                id="upload"
                className="input-image"
                type="file"
                accept="image/*"
                display="none"
                visibility="hidden"
                {...register("Avatar")}
                onChange={onChange}
              />
            </Flex>
            <ModalFooter>
              <Button
                colorScheme="purpleButton"
                mr={3}
                type="submit"
                isLoading={loading}
              >
                Upload Image
              </Button>
              <Button onClick={props.onClose}>Close</Button>
            </ModalFooter>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalUploadAvatar;
