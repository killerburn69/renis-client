import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Reject from '../imgs/close.svg'
const ToastReject:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <React.Fragment>
      <Box p="6" w="fit-content" h={"full"} bg="reject_button.100" borderRadius="full">
          <Image src={Reject} boxSize="6"/>
      </Box>
      <Text color="grey.350" fontFamily="Kalam" fontSize="xl">
        You have rejected <Text as="span" fontWeight="bold">{children}</Text>
      </Text>
    </React.Fragment>
  )
}

export default ToastReject