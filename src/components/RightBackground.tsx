import { Box, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'

const RightBackground = () => {
  return (
    <React.Fragment>
        <Box textAlign={'right'}>
          <Text color={'white'} textStyle='h1' mb={'1'}>Rensis</Text>
          <Text color={'white'}>Version 1.0</Text>
        </Box>
        <Flex alignItems={'center'} h={'96'} w={'md'} mx={'auto'} >
          <Heading color={'white'} fontWeight="hairline" textAlign={'center'} lineHeight="tall">Find the right Baby sister for your child!</Heading>
        </Flex>
    </React.Fragment>
  )
}

export default RightBackground