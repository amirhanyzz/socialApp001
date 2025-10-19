import { GENDER, SYS_ROLE, USER_AGENT } from "../enum";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
export interface IUser{
    firstName: string;
    lastName: string;
    fullName?: string; //virtual
    email: string;
    password: string;
    credentialUpdatedAt: Date;
    phoneNumber?: string;
    role: SYS_ROLE;
    gender: GENDER;
    userAgent: USER_AGENT;
    isVerified?: boolean;
    createdAt: Date;
    updatedAt: Date; 
    otp?: string;
    otpExpiryAt?: Date;
}


export interface IAttachment{
    url:string
    id:string
 }
export interface IPost{
    
    
    userId:ObjectId
    content:string
    likes:ObjectId[]
attachments?:IAttachment[]


}


declare module "jsonwebtoken"{
    interface JwtPayload{
        _id:string
        role:string
    }
}


declare module "express"{
    interface Request{
        user:IUser
    }
}



