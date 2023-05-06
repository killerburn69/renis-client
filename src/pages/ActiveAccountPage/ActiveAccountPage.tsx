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
import { UserActiveAccount } from "../../validations/ActiveUserAccount";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@apollo/client";
import { ACTIVE_ACCOUNT_MUTATION } from "../../graphql/mutation/auth.gql";
import { ActivateAccountInput, Email } from "../../models/types";
import {
  ActivateResponse,
  UserIdResponse,
} from "../../models/interfaces";
import { GET_USERID_BY_EMAIL } from "../../graphql/query/getUserIdByEmail";
// const sleep = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms));
const ActiveAccount = () => {
  const toast = useToast();
  const getEmail = localStorage.getItem("email");
  const [activateAccount, { data, error, loading }] = useMutation<
    { activateAccount: ActivateResponse },
    { activateInput: ActivateAccountInput }
  >(ACTIVE_ACCOUNT_MUTATION);
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
  } = useForm<ActivateAccountInput>({
    defaultValues: {
      User_ID: "",
      Otp: "",
    },
    resolver: yupResolver(UserActiveAccount),
  });
  const navigate = useNavigate();
  const onSubmit = async (datas: ActivateAccountInput) => {
    // await sleep(2000);
    try {
      await activateAccount({
        variables: {
          activateInput: {
            User_ID: USERID?.getUserByEmail.User_ID ?? "",
            Otp: datas.Otp,
          },
        },
      });
    } catch (e: any) {
      Error(e);
    }
  };
  useEffect(() => {
    // setValue("User_ID", USERID?.getUserByEmail.User_ID);
    if (data) {
      toast({
        title: "Active Account Succesfully",
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
              <FormControl
                as="form"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                  isLoading={loading}
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
