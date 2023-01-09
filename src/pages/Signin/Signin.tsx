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
const Signin = () => {
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
            <Text textStyle="h1" mb={3}>
              Welcome back!
            </Text>
            <Box maxW={'lg'} mx={'auto'}>
              <FormControl>
                <Inputs
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
                <Flex justify={'space-between'} mb={'8'}>
                  <Checkbox colorScheme={'purpleButton'}>Keep login</Checkbox>
                  <Text>Forget your password?</Text>
                </Flex>
                <Button w="full" size="md" variant="custom">
                  Login
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

export default Signin
