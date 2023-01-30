import { Box, Flex, Heading, Image, Text,Button, useToast } from '@chakra-ui/react'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from "swiper"
import BoxImage from './BoxImage'
import img1 from '../imgs/pexels-keira-burton-6624452.png'
import img2 from '../imgs/pexels-photo-929436.jpeg'
import img3 from '../imgs/pexels-photo-2869318.jpeg'
import Crown from '../imgs/crown 2.svg'
import Close from '../imgs/close.svg'
import CheckMark from '../imgs/check-mark.svg'
import Baby from '../imgs/baby-boy.svg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../App.css'
import ToastReject from './ToastReject'
import ToastAccept from './ToastAccept'
const CardMain = () => {
  const pagination = {
    clickable:true,
  }
  const toast = useToast();
  const rejectToast = () =>{
    toast({
       position:"bottom-right",
       duration:3000,
       isClosable:true,
       render:()=>(
          <Flex color='white' py={3} px={5} bg='white' align="center" gap="2" boxShadow="xl" rounded="xl">
            <ToastReject>Hello ấdawfwaw</ToastReject>
          </Flex>
       )
    })
  }
  const acceptToast = ()=>{
    toast({
      position:"bottom-right",
      duration:3000,
      isClosable:true,
      render:()=>(
         <Flex color='white' py={3} px={5} bg='white' align="center" gap="2" boxShadow="xl" rounded="xl">
           <ToastAccept>Hello ấdawfwaw</ToastAccept>
         </Flex>
      )
    })
  }
  return (
    <Flex zIndex={"docked"} align="center" gap="20">
      <Button p="6" h={"full"} variant={"reject"} borderRadius="full" onClick={rejectToast}>
          <Image src={Close}/>
      </Button>
      <BoxImage>
        <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Image src={img1}></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2}></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img3}></Image>
          </SwiperSlide>
        </Swiper>
        <Box zIndex={"docked"} position={"absolute"} bottom={"16"} left={"0"} px={"5"}>
          <Flex pb={"2"} gap={"2"}>
            <Heading variant="customNani">Baby Daniel</Heading>
            <Image src={Crown}/>
          </Flex>
          <Text color="grey.250" fontSize="sm" mb="6">Short desc for baby daniel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae hendrerit neque. Aliquam hendrerit tincidunt urna ac cursus. Ut faucibus dolor id venenatis scelerisque. Pellentesque est metus,</Text>
          <Flex gap="2">
            <Flex align="center" borderColor="grey.250" borderWidth="1px" p="1" borderRadius="lg">
              <Image src={Baby} boxSize="5"/>
              <Text color="grey.250" fontSize="xs">Grumpy baby</Text>
            </Flex>
            <Flex align="center" borderColor="grey.250" borderWidth="1px" p="1" borderRadius="lg">
              <Image src={Baby} boxSize="5"/>
              <Text color="grey.250" fontSize="xs">Grumpy baby</Text>
            </Flex>
            <Flex align="center" borderColor="grey.250" borderWidth="1px" p="1" borderRadius="lg">
              <Image src={Baby} boxSize="5"/>
              <Text color="grey.250" fontSize="xs">Grumpy baby</Text>
            </Flex>
          </Flex>
        </Box>
      </BoxImage>
      <Button p="6" h={"full"} variant={"accept"} borderRadius="full" onClick={acceptToast}>
          <Image src={CheckMark}/>
      </Button>
    </Flex>
  )
}

export default CardMain