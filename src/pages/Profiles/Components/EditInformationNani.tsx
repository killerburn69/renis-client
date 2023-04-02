import { Flex, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

const EditInformationNani = () => {
  return (
    <Flex justify="center" align="center" w="full" zIndex="overlay" h="100vh" position="fixed" top="0" left="0" bg="red" >
      <FormControl mx="auto" w="-moz-fit-content">
        <FormLabel>Update Profile Nani</FormLabel>
      </FormControl>
    
    </Flex>
  )
}

export default EditInformationNani