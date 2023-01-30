import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
const custom = defineStyle({
    color:"white",
    fontFamily:"Kalam",
    fontWeight:"semibold",
})
const customHeadingBaby = defineStyle({
    color:"white",
    fontFamily:"Open Sans",
    fontWeight:"semibold",
    fontSize:"3xl",
})
export const headingTheme = defineStyleConfig({
    variants:{
        "custom":custom,
        "customNani":customHeadingBaby,
    }
})