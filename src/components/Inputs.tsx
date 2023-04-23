
import { Input,Box,Text } from '@chakra-ui/react'

import {UseFormRegisterReturn, FieldError } from 'react-hook-form'


interface FormInput{
  label: string
  placeholder: string
  type: string
  id: string,
  register:UseFormRegisterReturn<'Email' | 'Password' | 'Confirm_Password' | 'Otp'>,
  error: FieldError | undefined
}

const Inputs = ({ label, placeholder, type, id, register, error}: FormInput) => {
  return ( 
    <Box marginBottom={'4'}>
      <Input bg="grey.100" placeholder={placeholder} type={type} id={id} {...register} />
      {error && <Text color="red.800" textAlign="left" mt="1">{error.message}</Text>}
    </Box>
  )
}

export default Inputs
