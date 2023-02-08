import { ChildrenProps } from "./interfaces"
import Accept from '../imgs/check-mark.svg'
import Reject from '../imgs/close.svg' 

export type Toast = {
    chilren:ChildrenProps,
    backgroundStatus:string,
    notificationText:{
        accept:"You have sent request",
        reject:"You have rejected"
    },
}