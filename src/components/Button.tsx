import React from 'react'
import { Button } from '@chakra-ui/react'
interface ButtonProps {
  width: string
  size: string
  content: string
  type:string | any
}
const Buttons = ({ width, size, content, type }: ButtonProps) => {
  return (
    <Button
      width={width}
      size={size}
      colorScheme={'purpleButton'}
      _hover={{ bg: 'purpleButton.600' }}
      _active={{ bg: 'purpleButton.700' }}
      type={type}
    >
      {content}
    </Button>
  )
}

export default Buttons
