import { Box } from '@chakra-ui/react'
import React from 'react'

const Mainbackground: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      w="full"
      h="fullContainer"
      bg="primary_color"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: 'full',
        height: 'fullContainer',
        bg: 'secondary_color',
        clipPath: 'polygon(0 0, 40% -3%, 72% 102%, 0 100%)',
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  )
}

export default Mainbackground
