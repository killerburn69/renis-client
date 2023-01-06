import React from 'react'
import { Input, FormLabel,Box} from '@chakra-ui/react';
interface FormInput{
  label:string,
  placeholder:string,
  type:string,
  id:string
}
const Inputs = ({label,placeholder,type,id}:FormInput) => {
  return (
    <Box>
      <FormLabel fontWeight={'semibold'}>{label}</FormLabel>
      <Input placeholder={placeholder} type={type} id={id} marginBottom={'3'}/>
    </Box>
  )
}

export default Inputs