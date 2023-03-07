import React, { PropsWithChildren } from "react";
import {Box, Text,Flex} from '@chakra-ui/react'
import { toastBackground } from "../theme/background/Background";
interface ToastProps extends PropsWithChildren {
    toastType : "reject" | "accept";
    icon:JSX.Element;
    title:string
}
const Toast = (props:ToastProps) =>{
    const {icon, toastType,title,children} = props
    return(
        <Flex sx={toastBackground}>
            <Box p="6" w="fit-content" h={"full"} bg={toastType === "accept" ? 'secondary_color' : "reject_button.100"} borderRadius="full">
                {icon}
            </Box>
            <Text color="grey.350" fontFamily="Kalam" fontSize="xl">
                {title} <Text as="span" fontWeight="bold">{children}</Text>
            </Text>
        </Flex>
    )
}
export default Toast