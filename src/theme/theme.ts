// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import {color} from './color/color'
import {borderRadius} from './borderRadius/borderRadius'
import { zIndices } from "./zIndex/zIndex"
import { fonts } from "./font/font"
import { fontSizes } from "./font/fontSizes"
import { fontWeights } from "./font/fontWeight"
import { lineHeights } from "./lineHeights/lineHeights"
import { letterSpacing } from "./letterSpacing/letterSpacing"
import { spacing } from "./spacingSize/spacing"
import { sizes } from "./spacingSize/size"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    ...color,
    ...borderRadius,
    ...zIndices,
    ...fonts,
    ...fontSizes,
    ...fontWeights,
    ...lineHeights,
    ...letterSpacing,
    ...spacing,
    ...sizes,
})
