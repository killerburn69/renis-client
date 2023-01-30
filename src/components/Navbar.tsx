import { Box, Center, Flex, Container, Image, Link } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import logo from '../imgs/logobaby.png'
const Navbar = () => {
  return (
    <Box zIndex="dropdown" bg='grey.100' boxShadow="md" position={'sticky'} top='0' left='0'>
      <Container maxW={"container.xl"} color="secondary_color">
        <Flex gap={'2'} align={'center'} justify={'space-between'}>
          <Image src={logo} boxSize={'16'} objectFit={'contain'}></Image>
          <Box>
            <Flex justify={'center'} align={'center'} h={'full'}>
              <Center>
                <Link p='6' _hover={{bg:"border"}} as={RouterLink} to="/">Home</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}}>Profile</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}}>Matches</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}}>In-contract</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}}>VIP</Link>
              </Center>
            </Flex>
          </Box>
          <Box>
            <Flex gap='2'>
              <Link bg="secondary_color" px="5" py="2" variant="custom" as={RouterLink} to="/signin">Sign in</Link>
              <Link bg="secondary_color" px="5" py="2" variant="custom" as={RouterLink} to="/signup">Register</Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
