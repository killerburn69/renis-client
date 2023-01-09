import { Box } from '@chakra-ui/react'
import React from 'react'
import { subBackground } from '../theme/background/Background'
const Subbackground: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={subBackground}
    >
      {children}
    </Box>
  )
}

export default Subbackground
