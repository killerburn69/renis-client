import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
const headingTitle = defineStyle({
    color:"white",
    fontFamily:"Kalam",
    fontWeight:"semibold",
})
const headingBase = defineStyle({
    color:"white",
    fontFamily:"Open Sans",
    fontWeight:"semibold",
    fontSize:"3xl",
})
export const headingTheme = defineStyleConfig({
    variants:{
        headingTitle:headingTitle,
        headingBase:headingBase,
    }
})