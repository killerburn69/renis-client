import {tabsAnatomy} from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
    tab:{
        fontFamily:"Open Sans",
        fontWeight:"bold",
        border:"5px solid red",
        bg:"transparent",
        _selected:{
            bg:"transparent",
            color:"heading_color",
            position:"relative",
            border:"none",
            _before:{
                content:"''",
                position:"absolute",
                bg:"heading_color",
                top:"50%",
                left:"0",
                transform:"translateY(-50%)",
                w:"2",
                h:"2",
                borderRadius:"full"
            }
        }
    },
    tablist:{
        color:"grey.600",
        py:"2",
        bg:"grey.450",
        gap:"90px",
        pl:"190px"
    },
    tabpanel:{
        fontFamily:"Open Sans",
    }
})
export const tabsTheme = defineMultiStyleConfig({ baseStyle })

