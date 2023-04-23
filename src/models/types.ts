import { Role } from "./enum"

export type User={
    USER_ID:string,
    Email:string,
    Password:string,
    Otp:string,
    Reset_Password_Otp:string,
    isActive:boolean,
    Role:Role,
    isBlocked:boolean
}

