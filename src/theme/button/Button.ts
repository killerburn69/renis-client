import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
const baseStyle = defineStyle({
  borderRadius: 0,
  fontFamily: 'Open Sans',
})
const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props
  return {
    fontFamily: 'Open Sans',
    bg: `${c}.500`,
    fontWeight: 'semibold',
    color: 'white',
    borderRadius: 'md',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',
    _hover: {
      bg: `${c}.600`,
    },
    _active: {
      bg: `${c}.700`,
    },
  }
})
export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    custom: customVariant,
  },
  defaultProps: {
    colorScheme: 'purpleButton',
  },
})
