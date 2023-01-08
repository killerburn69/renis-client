import { Box } from '@chakra-ui/react'
import React from 'react'
import babybg from '../imgs/babybg.jpeg'
const Subbackground: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      borderRadius="xl"
      w="6xl"
      minH="xl"
      bg="white"
      position="relative"
      overflow="hidden"
      zIndex="docked"
      boxShadow="lg"
      _before={{
        content: '""',
        position: 'absolute',
        top: '0',
        right: '0',
        width: 'full',
        height: 'full',
        background: ` url(${babybg}) no-repeat center center`,
        backgroundSize: 'cover',
        clipPath: 'polygon(41% -3%, 100% 0, 100% 100%, 72% 102%)',
      }}
      _after={{
        content:'""',
        position:'absolute',
        top:'0',
        right:'0',
        width:'full',
        height:'full',
        backgroundColor:'secondary_color',
        opacity:'0.8',
        clipPath:'polygon(41% -3%, 100% 0, 100% 100%, 72% 102%)',
      }}
    >
      {children}
    </Box>
  )
}

export default Subbackground
