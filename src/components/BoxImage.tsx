import { Box } from '@chakra-ui/react'
import React from 'react'

const BoxImage:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Box w="md" h="xl" borderRadius="2xl" overflow="hidden" position="relative">
      {children}
    </Box>
  )
}

export default BoxImage