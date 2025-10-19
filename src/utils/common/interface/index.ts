import { GENDER, SYS_ROLE, USER_AGENT } from "../enum";
import { REACTION } from "../enum";
import { ObjectId } from "mongoose";
export interface IUser{
    firstName: string;
    lastName: string;
    fullName?: string; //virtual
    email: string;
    password: string;
    _id: ObjectId;
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

 export interface IReaction{
    userId:ObjectId
    reaction:REACTION
 }
export interface IPost{
    
    
    userId:ObjectId
    content:string
    reaction:IReaction[]
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



