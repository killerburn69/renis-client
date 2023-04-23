import React, { useEffect } from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm} from 'react-hook-form'
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
import { UserSignUpValidation } from '../../validations/UserSignUp'
import { useNavigate } from 'react-router-dom'
import { Role } from '../../models/enum'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../../graphql/mutation/Signup'
import { useToast } from '@chakra-ui/react'
type SignUpForm = {
  Email:string,
  Password:string,
  Confirm_Password:string,
  Role:Role
}
interface JwtPayload{
  Access_Token:string,
  User:string
}
const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
const Signup = () => {
  const toast = useToast()
  const [signup, {data,error,loading}] = useMutation<
    {signup:JwtPayload},
    {signupInput:SignUpForm}
  >(SIGN_UP)
  const {register, handleSubmit,formState:{errors, isSubmitting}} = useForm<SignUpForm>({
    defaultValues:{
      Email:"",
      Password:"",
      Confirm_Password:"",
      Role:undefined
    },
    resolver:yupResolver(UserSignUpValidation)
  })
  const navigate = useNavigate();
  const onSubmit = async(datas:SignUpForm)=>{
    await sleep(2000)
    if(datas.Role){
      datas.Role = Role.NANY
    }
    else{
      datas.Role = Role.BABY
    }
    console.log(datas)
    try{
      await signup({
        variables:{
          signupInput:datas
        }
      })
    }catch(e){

    }
  }
  useEffect(()=>{
    if(data){
      toast({
        title:"Signup Successfully",
        status:"success",
        isClosable:true,
        position:"top-right"
      })
      navigate("/active")
    }
    if(error){
      toast({
        title:`${error.message}`,
        status:"error",
        isClosable:true,
        position:"top-right"
      })
    }
  },[error, data, toast, navigate])
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
              <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
                <Inputs
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
                />
                <Flex mb={'8'}>
                  <Checkbox colorScheme={'purpleButton'} {...register('Role')}>
                    Are you a baby sister ?
                  </Checkbox>
                </Flex>
                <Button w={'full'} size="md" variant="customButtonBase" type='submit' isLoading={isSubmitting}>
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
