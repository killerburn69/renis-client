import React, { useEffect } from "react";
import {
  GridItem,
  Flex,
  Image,
  Text,
  Box,
  FormControl,
  Checkbox,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import logo from "../../imgs/logobaby.png";
import Mainbackground from "../../components/Mainbackground";
import Subbackground from "../../components/Subbackground";
import TwoColumn from "../../components/TwoColumn";
import Inputs from "../../components/Inputs";
import RightBackground from "../../components/RightBackground";
import { UserSignInValidation } from "../../validations/UserSignin";
import { LOG_IN_MUTATION } from "../../graphql/mutation/auth.gql";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { JwtPayload } from "../../models/interfaces";
import { LoginInput } from "../../models/types";
// const sleep = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms));
const Signin = () => {
  const toast = useToast();
  const [login, { data, error, loading }] = useMutation<
    { login: JwtPayload },
    { loginInput: LoginInput }
  >(LOG_IN_MUTATION);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    defaultValues: {
      Email: "",
      Password: "",
    },
    resolver: yupResolver(UserSignInValidation),
  });
  const navigate = useNavigate();
  const onSubmit = async (datas: LoginInput) => {
    // await sleep(2000);
    localStorage.setItem("email", datas.Email);
    try {
      await login({
        variables: {
          loginInput: datas,
        },
      });
    } catch (e: unknown) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (data) {
      toast({
        title: "Login Successfully",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("token", JSON.stringify(data.login));
      navigate("/home");
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
            ></Image>
            <Text
              textStyle="h1"
              fontSize="4xl"
              fontWeight="extrabold"
              w="52"
              mb={3}
              mx="auto"
            >
              Welcome back!
            </Text>
            <Box maxW={"md"} mx={"auto"}>
              <FormControl
                as="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Inputs
                  id="email"
                  label="Email"
                  placeholder="Your email"
                  type="email"
                  register={{ ...register("Email") }}
                  error={errors.Email}
                />
                <Inputs
                  id="password"
                  label="Password"
                  placeholder="Your password"
                  type="password"
                  register={{ ...register("Password") }}
                  error={errors.Password}
                />
                <Flex justify={"space-between"} mb={"8"}>
                  <Checkbox colorScheme={"purpleButton"}>
                    Keep login
                  </Checkbox>
                  <Link
                    variant="linkFont"
                    color="black"
                    as={RouterLink}
                    to="/forget-password"
                  >
                    Forget your password?
                  </Link>
                </Flex>
                <Button
                  w="full"
                  size="md"
                  variant="customButtonBase"
                  type="submit"
                  isLoading={loading}
                >
                  Login
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

export default Signin;
