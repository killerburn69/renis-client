import React from 'react'
import { Box } from '@chakra-ui/react'
import { mainBackground } from '../theme/background/Background'
const Mainbackground: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
     sx={mainBackground}
    >
      {children}
    </Box>
  )
}

export default Mainbackground
