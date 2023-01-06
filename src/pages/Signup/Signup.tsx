import React from 'react'
import {
  GridItem,
  Flex,
  Image,
  Text,
  Box,
  FormControl,
  Checkbox,
} from '@chakra-ui/react'
import logo from '../../imgs/logobaby.png'
import { Background, BackgroundCustom } from '../../theme/background/background'
import Wrapper from '../../components/Wrapper'
import Inputs from '../../components/Inputs'
import Buttons from '../../components/Button'
import RightBackground from '../../components/RightBackground'
const Signup = () => {
  return (
    <Background>
      <BackgroundCustom>
        <Wrapper>
          <GridItem textAlign={'center'} p={4}>
            <Image
              src={logo}
              boxSize={'36'}
              mx={'auto'}
              marginBottom={'3'}
              objectFit={'contain'}
            ></Image>
            <Text fontSize={28} fontWeight={'semibold'} marginBottom={'8'}>
              Register Account!
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
                <Inputs
                  id="confirmPassword"
                  label="Confirm password"
                  placeholder="Your password"
                  type="password"
                />
                <Flex marginBottom={'8'}>
                    <Checkbox colorScheme={'purpleButton'}>Are you a baby sister ?</Checkbox>
                </Flex>
                <Buttons content="Register" size="md" width="full" type="submit" />
              </FormControl>
            </Box>
          </GridItem>
          <GridItem zIndex={'docked'} p={4}>
            <RightBackground />
          </GridItem>
        </Wrapper>
      </BackgroundCustom>
    </Background>
  )
}

export default Signup
