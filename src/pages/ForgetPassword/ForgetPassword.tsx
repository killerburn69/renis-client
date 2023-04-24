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
import React from "react";
import logo from "../../imgs/logobaby.png";
import Mainbackground from "../../components/Mainbackground";
import Subbackground from "../../components/Subbackground";
import TwoColumn from "../../components/TwoColumn";
import Inputs from "../../components/Inputs";
import RightBackground from "../../components/RightBackground";
const ForgetPassword = () => {
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
              <FormControl as="form">
                {/* <Inputs
                                id="email"
                                label="Email"
                                placeholder="Your email"
                                type="email"
                                register={{...register('Email')}}
                                error={errors.Email}
                            />
                            <Inputs
                                id="password"
                                label="Password"
                                placeholder="Your password"
                                type="password"
                                register={{...register('Password')}}
                                error={errors.Password}
                            />
                            <Inputs
                                id="confirmPassword"
                                label="Confirm password"
                                placeholder="Your confirm password"
                                type="password"
                                register={{...register('Confirm_Password')}}
                                error={errors.Confirm_Password}
                            /> */}
                <Button
                  w={"full"}
                  size="md"
                  variant="customButtonBase"
                  type="submit"
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
