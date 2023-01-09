// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import { buttonTheme } from "./button/Button"
import {color} from './color/color'
import { fonts } from "./font/font"
import { sizes } from "./spacingSize/size"
import { textsStyle } from "./text/text"
import { layer } from "./layer/layer"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    ...color,
    ...fonts,
    ...sizes,
    ...textsStyle,
    ...layer,
    components:{
        Button:buttonTheme
    }
})
