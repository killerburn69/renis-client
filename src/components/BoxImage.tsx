import { Box,Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from "swiper"
import Crown from '../imgs/crown 2.svg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../App.css'
import { tagBackground } from '../theme/background/Background'
import { Information } from '../dummydata/data'

type Props = { 
  list : Information
}
const BoxImage= ({list}:Props) => {
  const pagination = {
    clickable:true,
  }
  return (
    <Box w="lg" h="2xl" borderRadius="2xl" overflow="hidden" position="relative">
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
          {list.imgArray.map((itemImage,index)=>(
            <SwiperSlide className='slide-bg' key={itemImage.id}>
              <Image src={itemImage.img}></Image>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box zIndex={"docked"} position={"absolute"} bottom={"16"} left={"0"} px={"5"}>
          <Flex pb={"2"} gap={"2"}>
            <Heading variant="headingBase">{list.name}</Heading>
            {list.vip && <Image src={Crown}/>}
          </Flex>
          <Text color="grey.250" fontSize="sm" mb="6">{list.description}</Text>
          <Flex gap="3">
            {list.tagArray.map((itemTag,index)=>(
              <Flex sx={tagBackground} key={itemTag.id}>
                <Image src={itemTag.icon} boxSize="4"/>
                <Text color="grey.250" fontSize="xs">{itemTag.title}</Text>
             </Flex>
            ))}
          </Flex>
        </Box>
    </Box>
  )
}

export default BoxImage