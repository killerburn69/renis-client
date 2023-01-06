import { Box, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'

const RightBackground = () => {
  return (
    <React.Fragment>
         <Box textAlign={'right'}>
              <Text color={'white'} fontSize={32} fontWeight={'semibold'} marginBottom={'1'}>Rensis</Text>
              <Text color={'white'}>Version 1.0</Text>
            </Box>
            <Flex alignItems={'center'} height={'96'} width={'96'} mx={'auto'}>
              <Heading color={'white'} textAlign={'center'} fontSize={'32'} >Find the right Baby sister for your child!</Heading>
            </Flex>
    </React.Fragment>
  )
}

export default RightBackground