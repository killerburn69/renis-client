import React, { useEffect } from "react";
import {
  GridItem,
  Flex,
  Image,
  Text,
  Box,
  FormControl,
  Button,
} from "@chakra-ui/react";
import logo from "../../imgs/logobaby.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Mainbackground from "../../components/Mainbackground";
import Subbackground from "../../components/Subbackground";
import TwoColumn from "../../components/TwoColumn";
import Inputs from "../../components/Inputs";
import RightBackground from "../../components/RightBackground";
import { UserActiveAccount } from "../../validations/ActiveAccount";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ACTIVE_ACCOUNT_MUTATION } from "../../graphql/mutation/auth.gql";
import { ActivateAccountInput } from "../../models/types";
import { ActivateResponse } from "../../models/interfaces";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const ActiveAccount = () => {
  const toast = useToast();
  const [activateAccount, { data, error, loading }] = useMutation<
    { activateAccount: ActivateResponse },
    { activateInput: ActivateAccountInput }
  >(ACTIVE_ACCOUNT_MUTATION);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ActivateAccountInput>({
    defaultValues: {
      Email: "",
      Otp: "",
    },
    resolver: yupResolver(UserActiveAccount),
  });
  const navigate = useNavigate();
  const onSubmit = async (datas: ActivateAccountInput) => {
    await sleep(2000);
    try {
      await activateAccount({
        variables: {
          activateInput: datas,
        },
      });
    } catch (e: unknown) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (data) {
      toast({
        title: "Active Account Succesfully",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
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
          <GridItem textAlign={"center"} p={4}>
            <Image
              src={logo}
              boxSize={"36"}
              mx={"auto"}
              mb={"3"}
              objectFit={"contain"}
            />
            <Text textStyle="h1" mb={3}>
              Active Account!
            </Text>
            <Box maxW={"lg"} mx={"auto"}>
              <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
                <Inputs
                  id="email"
                  label="Email"
                  placeholder="Your email"
                  type="email"
                  register={{ ...register("Email") }}
                  error={errors.Email}
                />
                <Inputs
                  id="code"
                  label="Activation code"
                  placeholder="Activation code"
                  type="text"
                  register={{ ...register("Otp") }}
                  error={errors.Otp}
                />
                <Flex justify={"flex-end"} mb={"8"}>
                  <Text>Forget your password?</Text>
                </Flex>
                <Button
                  w="full"
                  size="md"
                  variant="customButtonBase"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Active OTP
                </Button>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem zIndex={"docked"} p={4}>
            <RightBackground />
          </GridItem>
        </TwoColumn>
      </Subbackground>
    </Mainbackground>
  );
};

export default ActiveAccount;
