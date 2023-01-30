import React from 'react'

import { Box, Center, IconButton, Input  } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
const Search = () => {
  return (
    <Box py="4" bg="grey.100">
        <Center maxW="xl" mx="auto">
            <Input bg="white" mr="3" placeholder='Search baby sister’s name'/>
            <IconButton color="white" borderRadius="md" variant="customIcon" aria-label='Search database' icon={<SearchIcon/>}/>
        </Center>
    </Box>
  )
}

export default Search