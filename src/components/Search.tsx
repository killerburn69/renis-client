import React from 'react'

import { Box, Center, IconButton, Input  } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
const Search = () => {
  return (
    <Box py="2" bg="grey.100" borderTop="2px solid #c0c0c0">
        <Center maxW="lg" mx="auto">
            <Input bg="white" mr="3" ml="-7" placeholder='Search baby sister’s name'/>
            <IconButton w="20" fontSize="xl" color="white" borderRadius="md" variant="buttonSearch" aria-label='Search database' icon={<SearchIcon/>}/>
        </Center>
    </Box>
  )
}

export default Search