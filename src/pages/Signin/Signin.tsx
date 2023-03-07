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
  FormErrorMessage,
  Link,
} from '@chakra-ui/react'
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm , FieldValues} from 'react-hook-form'
import logo from '../../imgs/logobaby.png'
import Mainbackground from '../../components/Mainbackground'
import Subbackground from '../../components/Subbackground'
import TwoColumn from '../../components/TwoColumn'
import Inputs from '../../components/Inputs'
import RightBackground from '../../components/RightBackground'
import { UserSignInValidation } from '../../validations/UserSignin'
type SigninForm = {
  email:string,
  password:string,
  isKeepLogin:boolean,
}
const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
const Signin = () => {
  const {register, handleSubmit,formState:{errors, isSubmitting}} = useForm<FieldValues>({
    resolver:yupResolver(UserSignInValidation)
  })
  const navigate = useNavigate()
  const onSubmit = async(data:FieldValues)=>{
    await sleep(2000)
    if(data.email === "baovan301@gmail.com"){
      alert(JSON.stringify(data));
      navigate("/home")
    }
    else{
      alert("Error")
    }
  };
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
              <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
                <Inputs
                  id="email"
                  label="Email"
                  placeholder="Your email"
                  type="email"
                  register={register}
                />
                <Inputs
                  id="password"
                  label="Password"
                  placeholder="Your password"
                  type="password"
                  register={register}
                />
                <Flex justify={'space-between'} mb={'8'}>
                  <Checkbox colorScheme={'purpleButton'} {...register('isKeepLogin')}>Keep login</Checkbox>
                  <Link variant="linkFont" color="black" as={Link}>Forget your password?</Link>
                </Flex>
                <Button w="full" size="md" variant="customButtonBase" type='submit' isLoading={isSubmitting}>
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
