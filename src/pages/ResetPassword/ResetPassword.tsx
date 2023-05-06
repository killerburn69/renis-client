import {
  GridItem,
  Image,
  Text,
  Box,
  FormControl,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import logo from "../../imgs/logobaby.png";
import Mainbackground from "../../components/Mainbackground";
import Subbackground from "../../components/Subbackground";
import TwoColumn from "../../components/TwoColumn";
import RightBackground from "../../components/RightBackground";
import { useMutation, useQuery } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from "../../graphql/mutation/auth.gql";
import { Email, ResetPasswordInput, User } from "../../models/types";
import { UserIdResponse } from "../../models/interfaces";
import { GET_USERID_BY_EMAIL } from "../../graphql/query/getUserIdByEmail";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordValidation } from "../../validations/ResetPassword";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/Inputs";

const ResetPassword = () => {
  const toast = useToast();
  const getEmail = localStorage.getItem("email");
  const [resetPassword, { data, error, loading }] = useMutation<
    { resetPassword: User },
    { resetPasswordInput: ResetPasswordInput }
  >(RESET_PASSWORD_MUTATION);
  const { data: USERID } = useQuery<UserIdResponse, Email>(
    GET_USERID_BY_EMAIL,
    {
      variables: {
        email: getEmail ? JSON.parse(`"${getEmail}"`) : null,
      },
    },
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInput>({
    defaultValues: {
      Otp: "",
      newPassword: "",
      userId: "",
    },
    resolver: yupResolver(ResetPasswordValidation),
  });
  const navigate = useNavigate();
  const onSubmit = async (datas: ResetPasswordInput) => {
    try {
      await resetPassword({
        variables: {
          resetPasswordInput: {
            Otp: datas.Otp,
            newPassword: datas.newPassword,
            userId: USERID?.getUserByEmail.User_ID ?? "",
          },
        },
      });
    } catch (e: any) {
      Error(e);
    }
  };
  useEffect(() => {
    if (data) {
      toast({
        title: "Change password succesfully",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      localStorage.removeItem("email");
      navigate("/signin");
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
              Reset Password
            </Text>
            <Box maxW="lg" mx="auto">
              <FormControl
                as="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Inputs
                  id="code"
                  label="OTP code"
                  placeholder="OTP code"
                  type="text"
                  register={{ ...register("Otp") }}
                  error={errors.Otp}
                />
                <Inputs
                  id="code"
                  label="New Password"
                  placeholder="New Password"
                  type="text"
                  register={{ ...register("newPassword") }}
                  error={errors.newPassword}
                />
                <Button
                  w="full"
                  size="md"
                  variant="customButtonBase"
                  type="submit"
                  isLoading={loading}
                >
                  Reset Password
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

export default ResetPassword;
