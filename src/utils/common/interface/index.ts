import { GENDER, SYS_ROLE, USER_AGENT } from "../enum";

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