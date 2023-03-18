import { Flex, Image, Button, useToast,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoxImage from './BoxImage'
import CheckMark from '../imgs/check-mark.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../App.css'
import { ArrayListInformation } from '../dummydata/data'
import Reject from '../imgs/close.svg'
import Accpet from '../imgs/check-mark.svg'
import Toast from './Toast'
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
        <Toast toastType='reject' icon={<Image src={Reject} boxSize="8"/>} title="You have rejectd">John</Toast>
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
        <Toast toastType='accept' icon={<Image src={Accpet} boxSize="8"/>} title="You have just send request for">Alaica</Toast>
      ),
    })
  }
  return (
    <Flex zIndex={'docked'} align="center" gap="20">
      <Button variant={'reject'} onClick={rejectToast} disabled={isDisable}>
        <Image src={Reject}/>
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
