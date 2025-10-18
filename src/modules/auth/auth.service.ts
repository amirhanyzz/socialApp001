import type { NextFunction, Request, Response } from "express";
import { RegisterDto } from "./auth.dto";
import { ConflictException,ForbiddenException } from "../../utils/error";
import { UserRepository } from "../../DB";
import { AuthFactoryService } from "./factory";
import { VerifyAccountDto } from "./auth.dto";
import { AuthProvider } from "./provider/auth.provider";
import { LoginDto } from "./auth.dto";
import { compareHash } from "../../utils";
import { generateToken } from "../../utils/token";
class AuthService {
// private DBPostService = new DBPostService<IUser>()


 private userRepository = new  UserRepository()
 private authFactoryService = new AuthFactoryService()
  constructor(){}
  



  // register
 register=async(req:Request,res:Response,next:NextFunction)=>{
    // get data from request
    const registerDto:  RegisterDto = req.body
    // check if user is already exists

    const userExists = await this.userRepository.exsit({email:registerDto.email})
  if(userExists){
   throw new ConflictException("user already exists")  } 

 const user = await this.authFactoryService.createUser(registerDto)

  // save into DB
 const createdUser = await this.userRepository.create(user)

  // send response
  res.status(201)
  .json({
    message:"User created successfully",
    success:true,
    data:{id:createdUser._id}
  })  
  }
// verify account
verifyAccount=async(req:Request,res:Response,next:NextFunction)=>{
    // get data from request
    const verifyAccountDto: VerifyAccountDto = req.body
   await AuthProvider.checkOtp(verifyAccountDto)

    await this.userRepository.update({email:verifyAccountDto.email},{isVerified:true,$unset:{otp:"",otpExpiryAt:""}}) 
  

  return res.sendStatus(204)}


  // login
  login=async(req:Request,res:Response,next:NextFunction)=>{
    // get data from request
    const loginDto: LoginDto = req.body
    //check if user exists
    const userExist = await this.userRepository.exsit({email:loginDto.email})
    if(!userExist){
        throw new ForbiddenException("User not found")
    }

if( !await  compareHash(loginDto.password,userExist.password)){
    throw new ForbiddenException("Invalid credentials")
}
// generate token

const accessToken = generateToken({payload:{_id:userExist._id,role:userExist.role},
  option:{expiresIn:"1h"}})

return res.status(200).json({message:"done",success:true,data:{accessToken}})
}












}

export default new AuthService()
