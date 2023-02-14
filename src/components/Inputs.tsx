
import { Input, FormLabel, Box } from '@chakra-ui/react'
import {UseFormRegister, FieldValues } from 'react-hook-form'
interface FormInput{
  label: string
  placeholder: string
  type: string
  id: string,
  register:UseFormRegister<FieldValues>,
}

const Inputs = ({ label, placeholder, type, id, register, ...rest}: FormInput) => {
  return ( 
    <Box>
      <FormLabel fontWeight={'semibold'}>{label}</FormLabel>
      <Input placeholder={placeholder} type={type} id={id} marginBottom={'3'} {...register(id)} {...rest}/>
    </Box>
  )
}

export default Inputs
