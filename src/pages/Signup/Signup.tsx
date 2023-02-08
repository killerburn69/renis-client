import React from 'react'
import {
  GridItem,
  Flex,
  Image,
  Text,
  Box,
  FormControl,
  Checkbox,
  Button,
} from '@chakra-ui/react'
import logo from '../../imgs/logobaby.png'
import Mainbackground from '../../components/Mainbackground'
import Subbackground from '../../components/Subbackground'
import TwoColumn from '../../components/TwoColumn'
import Inputs from '../../components/Inputs'
import RightBackground from '../../components/RightBackground'
const Signup = () => {
  return (
    <Mainbackground>
      <Subbackground>
        <TwoColumn>
          <GridItem textAlign={'center'} p={4}>
            <Image
              src={logo}
              boxSize={'36'}
              mx={'auto'}
              mb={'3'}
              objectFit={'contain'}
            ></Image>
            <Text textStyle="h1" mb="3">
              Register Account!
            </Text>
            <Box maxW={'lg'} mx={'auto'}>
              <FormControl>
                {/* <Inputs
                  id="email"
                  label="Email"
                  placeholder="Your email"
                  type="email"
                />
                <Inputs
                  id="password"
                  label="Password"
                  placeholder="Your password"
                  type="password"
                />
                <Inputs
                  id="confirmPassword"
                  label="Confirm password"
                  placeholder="Your password"
                  type="password"
                /> */}
                <Flex mb={'8'}>
                  <Checkbox colorScheme={'purpleButton'}>
                    Are you a baby sister ?
                  </Checkbox>
                </Flex>
                <Button w={'full'} size="md" variant="customButtonBase">
                  Register
                </Button>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem zIndex={'docked'} p={4}>
            <RightBackground />
          </GridItem>
        </TwoColumn>
      </Subbackground>
    </Mainbackground>
  )
}

export default Signup
