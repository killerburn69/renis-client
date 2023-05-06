import {
  GridItem,
  Image,
  Text,
  Box,
  FormControl,
  Flex,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import logo from "../../imgs/logobaby.png";
import Mainbackground from "../../components/Mainbackground";
import Subbackground from "../../components/Subbackground";
import TwoColumn from "../../components/TwoColumn";
import Inputs from "../../components/Inputs";
import RightBackground from "../../components/RightBackground";
import { useToast } from "@chakra-ui/react";
import { Email } from "../../models/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgetPasswordValidation } from "../../validations/ForgetPassword";
import { useMutation } from "@apollo/client";
import { FORGET_PASSWORD_MUTATION } from "../../graphql/mutation/auth.gql";
import { useNavigate } from "react-router-dom";
import { ForgotPassResponse } from "../../models/interfaces";
const ForgetPassword = () => {
  const toast = useToast();
  const [forgotPassword, { data, error, loading }] = useMutation<
    { forgotPassword: ForgotPassResponse },
    { email: string }
  >(FORGET_PASSWORD_MUTATION);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Email>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(ForgetPasswordValidation),
  });
  const navigate = useNavigate();
  const onSubmit = async (datas: Email) => {
    console.log(datas.email);
    localStorage.setItem("email", datas.email);
    try {
      await forgotPassword({
        variables: {
          email: datas.email,
        },
      });
    } catch (e: any) {
      Error(e);
    }
  };
  useEffect(() => {
    if (data) {
      toast({
        title: data.forgotPassword.Message,
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      navigate("/reset-password");
    }
    if (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    }
  }, [error, data, toast, navigate]);
  return (
    <Mainbackground>
      <Subbackground>
        <TwoColumn>
          <GridItem textAlign="center" p="4">
            <Image
              src={logo}
              boxSize="36"
              mx="auto"
              mb="3"
              objectFit="contain"
            />
            <Text textStyle="h1" mb="3">
              Forget Password
            </Text>
            <Box maxW={"lg"} mx={"auto"}>
              <FormControl
                as="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Inputs
                  id="email"
                  label="Email"
                  placeholder="Your email"
                  type="email"
                  register={{ ...register("email") }}
                  error={errors.email}
                />
                <Button
                  w={"full"}
                  size="md"
                  variant="customButtonBase"
                  type="submit"
                  isLoading={loading}
                >
                  Send email
                </Button>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem zIndex="docked" p="4">
            <RightBackground />
          </GridItem>
        </TwoColumn>
      </Subbackground>
    </Mainbackground>
  );
};

export default ForgetPassword;
