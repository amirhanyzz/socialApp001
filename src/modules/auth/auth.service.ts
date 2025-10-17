import type { NextFunction, Request, Response } from "express";
import { RegisterDto } from "./auth.dto";
import { ConflictException,BadRequestException,NotFoundException } from "../../utils/error";
import { UserRepository } from "../../DB";
import { AuthFactoryService } from "./factory";
import { VerifyAccountDto } from "./auth.dto";

class AuthService {
// private DBPostService = new DBPostService<IUser>()


 private userRepository = new  UserRepository()
 private authFactoryService = new AuthFactoryService()
  constructor(){}
  



  // register
   register=async(req:Request,res:Response,next:NextFunction)=>{
    // get data from request
    const registerDto:  RegisterDto = req.body
    // validate data

  
    
    
    // check if user is already exists

    const userExists = await this.userRepository.exsit({email:registerDto.email})
  if(userExists){
   throw new ConflictException("user already exists")
  } 

 const user = await this.authFactoryService.createUser(registerDto)

  // save into DB
 const createdUser = await this.userRepository.create(user)








  // send response
  res.status(201)
  .json({
    message:"User created successfully",
    success:true,
    data:{
      id:createdUser._id,
     }
  })  }

verifyAccount=async(req:Request,res:Response,next:NextFunction)=>{
    // get data from request
    const verifyAccountDto: VerifyAccountDto = req.body
    // validate data
    if(!verifyAccountDto.email || !verifyAccountDto.otp){
        throw new BadRequestException("email and otp are required")
    }

    // check if user is already exists
    const UesrExist = await this.userRepository.exsit({email:verifyAccountDto.email})

    if(!UesrExist){
        throw new NotFoundException("User not found")
    }

    if(UesrExist.otp !== verifyAccountDto.otp){
        throw new BadRequestException("Invalid otp")
    }

    if(!UesrExist.otpExpiryAt || UesrExist.otpExpiryAt < new Date()){
        throw new BadRequestException("Otp expired")
    }




  }













}





export default new AuthService()
