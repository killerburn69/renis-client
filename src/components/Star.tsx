import { Flex } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
const Star = () => {
  return (
    <Flex>
        {Array(3).fill(null).map((item,index)=>(
            <StarIcon boxSize="3" mr="1" color="rate"/>
        ))}
        {Array(5-3).fill(null).map((item,index)=>(
            <StarIcon boxSize="3" mr="1" color="grey.400"/>
        ))}
    </Flex>
  )
}

export default Star