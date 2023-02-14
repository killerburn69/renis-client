import { Box,Flex,Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import OverplayMessage from '../imgs/overplay.svg'
import { backgroundOverlay } from '../theme/background/Background'
export const Overlay = () => {
  const [close, setClose] = useState(true)
  useEffect(()=>{
      const timeClose = setTimeout(()=>{
        setClose(false)
      },2000)
      return ()=>clearTimeout(timeClose)
  },[])
  return (
    <React.Fragment>
      {
        close && (
              <Flex sx={backgroundOverlay}>
                <Image src={OverplayMessage} boxSize="lg"/>
              </Flex>
      )}
    </React.Fragment>
  )
}
