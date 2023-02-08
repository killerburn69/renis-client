import React from 'react'
import { Box } from '@chakra-ui/react'
import { mainBackground } from '../theme/background/Background'
import { ChildrenProps } from '../models/interfaces'
const Mainbackground = ({ children }:ChildrenProps) => {
  return (
    <Box
     sx={mainBackground}
    >
      {children}
    </Box>
  )
}

export default Mainbackground
