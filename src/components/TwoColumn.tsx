import React from 'react'
import { Grid } from '@chakra-ui/react'
const TwoColumn:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" height={'full'}>
        {children}
    </Grid>
  )
}

export default TwoColumn