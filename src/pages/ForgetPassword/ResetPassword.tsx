import {
  GridItem,
  Image,
  Text,
  Box,
  FormControl,
  Button,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../imgs/logobaby.png";
import Mainbackground from "../../components/Mainbackground";
import Subbackground from "../../components/Subbackground";
import TwoColumn from "../../components/TwoColumn";
import RightBackground from "../../components/RightBackground";

const ResetPassword = () => {
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
              <FormControl as="form">
                <Button
                  w="full"
                  size="md"
                  variant="customButtonBase"
                  type="submit"
                >
                  Reset Password
                </Button>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem zIndex="docked">
            <RightBackground />
          </GridItem>
        </TwoColumn>
      </Subbackground>
    </Mainbackground>
  );
};

export default ResetPassword;
