import { Flex, Image, Button, useToast,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoxImage from './BoxImage'
import Close from '../imgs/close.svg'
import CheckMark from '../imgs/check-mark.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../App.css'
import ToastReject from './ToastReject'
import ToastAccept from './ToastAccept'
import { toastBackground } from '../theme/background/Background'
import { ArrayListInformation } from '../dummydata/data'
const CardMain = () => {
  const toast = useToast()
  const [nextSlide, setNextSlide] = useState<number>(1)
  const [isDisable, setIsDiable] = useState<boolean>(false)

  const rejectToast = () => {
    setNextSlide((prev) => prev + 1)
    if(nextSlide === ArrayListInformation.length){
      setIsDiable(true)
    }
    toast({
      position: 'bottom-right',
      duration: 3000,
      isClosable: true,
      render: () => (
        <Flex sx={toastBackground}>
          <ToastReject>Hello ấdawfwaw</ToastReject>
        </Flex>
      ),
    })
  }
  const acceptToast = () => {
    setNextSlide((prev) => prev + 1)
    if(nextSlide === ArrayListInformation.length){
      setIsDiable(true)
    }
    toast({
      position: 'bottom-right',
      duration: 3000,
      isClosable: true,
      render: () => (
        <Flex sx={toastBackground}>
          <ToastAccept>Hello ấdawfwaw</ToastAccept>
        </Flex>
      ),
    })
  }
  return (
    <Flex zIndex={'docked'} align="center" gap="20">
      <Button variant={'reject'} onClick={rejectToast} disabled={isDisable}>
        <Image src={Close} />
      </Button>
      {isDisable ? <Text>Done</Text> : ArrayListInformation.filter((item) => item.id === nextSlide).map(
        (item) => (
          <BoxImage list={item} key={item.id}/>
        ),
      )}
      <Button variant={'accept'} onClick={acceptToast} disabled={isDisable}>
        <Image src={CheckMark} />
      </Button>
    </Flex>
  )
}



export default CardMain
