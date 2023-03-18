import { Box, Center, Flex, Container, Image, Link, IconButton,Text } from '@chakra-ui/react'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import logo from '../imgs/logobaby.png'
import {backgroundIconNotification, backgroundAmountNotification } from '../theme/background/Background'
import { BellIcon } from '@chakra-ui/icons'
const Navbar = () => {
  const location = useLocation()
  console.log(location.pathname);
  
  return (
      <Container maxW="full" color="secondary_color">
        <Flex gap={'1'} align={'center'} justify={'space-around'}>
          
          <Image src={logo} boxSize={'16'} objectFit={'contain'} marginLeft="10"></Image>
          <Box>
            <Flex justify={'center'} align={'center'} h={'full'}>
              <Center>
                <Link p='6' _hover={{bg:"border"}} as={RouterLink} to="/home" bg={location.pathname === '/home' ? "border" : "none"}>Home</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}} as={RouterLink} to="/profile" bg={location.pathname === '/profile' ? "border" : "none"}>Profile</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}} as={RouterLink} to="/" bg={location.pathname === '/match' ? "border" : "none"}>Matches</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}} as={RouterLink} to="/" bg={location.pathname === '/contract' ? "border" : "none"}>In-contract</Link>
              </Center>
              <Center>
                <Link p='6' _hover={{bg:"border"}} as={RouterLink} to="/" bg={location.pathname === '/vip' ? "border" : "none"}>VIP</Link>
              </Center>
            </Flex>
          </Box>
          <Box marginRight="10">
            <Flex gap='2'>
              <Box position="relative">
                <IconButton aria-label='notification' icon={<BellIcon/>} sx={backgroundIconNotification}/>
                <Flex sx={backgroundAmountNotification}>
                  <Text fontSize="10">2</Text>
                </Flex>
              </Box>
              <Link bg="secondary_color" px="3" py="1" h="fit-content" m="auto 0" variant="linkFont" as={RouterLink} to="/signup">Sign out</Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
  )
}

export default Navbar
