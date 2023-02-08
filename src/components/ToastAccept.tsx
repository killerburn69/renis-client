import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import Accept from '../imgs/check-mark.svg'
const ToastAccept:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <React.Fragment>
        <Box p="6" w="fit-content" h={"full"} bg="secondary_color" borderRadius="full">
          <Image src={Accept} boxSize="8"/>
        </Box>
        <Text color="grey.350" fontFamily="Kalam" fontSize="xl">
            You have sent request <Text as="span" fontWeight="bold">{children}</Text>
        </Text>
    </React.Fragment>
  )
}

export default ToastAccept