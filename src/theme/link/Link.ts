import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
const baseStyle = defineStyle({
    fontWeight: "normal", // change the font weight to normal
    fontFamily: "Kalam", // change the font family to monospaced
    fontSize:"18",
    _hover:{
        textDecoration:"none",
    }
})
const customTheme = defineStyle({
    fontWeigth:"semibold",
    fontFamily:"Open Sans",
    color:'white',
    fontSize:"15",
})
export const linkTheme = defineStyleConfig({
    baseStyle,
    variants:{
        custom:customTheme
    }
})