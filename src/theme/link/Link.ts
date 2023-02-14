import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
const navbarFont = defineStyle({
    fontWeight: "normal", // change the font weight to normal
    fontFamily: "Kalam", // change the font family to monospaced
    fontSize:"18",
    _hover:{
        textDecoration:"none",
    },
})
const customLinkFont = defineStyle({
    fontWeigth:"semibold",
    fontFamily:"Open Sans",
    color:'white',
    fontSize:"15",
})
export const linkTheme = defineStyleConfig({
    baseStyle:navbarFont,
    variants:{
        linkFont:customLinkFont
    }
})