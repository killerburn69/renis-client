import React,{ReactNode} from 'react'
import { Grid } from '@chakra-ui/react'
interface IWrapperProps{
    children:ReactNode
}
const Wrapper = ({children}:IWrapperProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" height={'full'}>
        {children}
    </Grid>
  )
}

export default Wrapper