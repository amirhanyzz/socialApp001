import type { NextFunction, Request, Response } from "express";
import { RegisterDto } from "./auth.dto";
import { ConflictException,BadRequestException } from "../../utils/error";
import { UserRepository } from "../../DB";
import { AuthFactoryService } from "./factory";
import { sendEmail } from "../../utils/email";
import { devConfig } from "../../config/env/dev.config";
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
// send email
await sendEmail({
   from: devConfig.EMAIL_USER,
   to: registerDto.email,
   subject: "Confirm Email",
   html: `<h1>Confirm Email</h1>
   <h2>your otp is ${user.otp}</h2>
   <p>Click on the link to confirm your email</p>` 
})








  // send response
  res.status(201)
  .json({
    message:"User created successfully",
    success:true,
    data:createdUser
  })



  }



}





export default new AuthService()
