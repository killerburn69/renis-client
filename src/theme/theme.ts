// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    color:{
        transparent:"transparent",
        black:"#000",
        white:"#fff",
        dark:"#333333",
        blue_sky:"#7AA4CA",
        red:{
            400:"#F26161",
            800:"#B42E2E",
        },
        gray:{
            50:"#F4F3F3",
            100:"#F4F4F4",
            200:"#E5E5E5",
            300:"#D9D9D9",
            400:"#D1D1D1",
            800:"#848484",
        },
        purple:"#C95283",
        primary_color:"#E3A5A7",
        sub_primary_color:"#CC7A7A",
        secondary_color:"#8682A7",
        heading_color:"#8682A7",
        font_color:"#D78AA8",
        paragraph_color:"#5F5F5F",
        rate:"#FF9900",
        unrate:"#D1D1D1",
        background_one:"#E17E36",
        border:"#F2C9CD",
    }
})