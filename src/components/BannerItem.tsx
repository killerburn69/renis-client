import React, {PropsWithChildren} from 'react'
import { Flex, Image, Box, Heading, Text } from '@chakra-ui/react'
import Baby from '../imgs/pexels-photo-929436.jpeg'
import { Banner } from '../dummydata/data'
interface BannerItemProps extends PropsWithChildren{
    banner:Banner
}
const BannerItem = ({banner}:BannerItemProps) => {
    
  return (
    <Flex align="center" gap="2" px="2" py="1" bg="grey.300" borderRadius="full" w="56">
        <Image src={Baby} boxSize="50px" objectFit='cover' borderRadius="full"/>
        <Box>
            <Heading variant="headingBase" color="black" fontSize="15">{banner.name}</Heading>
            <Text fontSize="12">{banner.desc}</Text>
        </Box>
    </Flex>
  )
}

export default BannerItem