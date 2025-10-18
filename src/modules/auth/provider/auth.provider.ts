import { UserRepository } from "../../../DB"
import { BadRequestException, NotFoundException } from "../../../utils/error"
import { VerifyAccountDto } from "../auth.dto"


export const AuthProvider =  {
  async checkOtp(verifyAccountDto:VerifyAccountDto){
        const userRepository = new UserRepository()
        
        
        
        
        
        // validate data
        if(!verifyAccountDto.email || !verifyAccountDto.otp){
            throw new BadRequestException("email and otp are required")
        }
    
        // check if user is already exists
        const UesrExist = await userRepository.exsit({
            email:verifyAccountDto.email})
    
        if(!UesrExist){
            throw new NotFoundException("User not found")
        }
    
        if(UesrExist.otp !== verifyAccountDto.otp){
            throw new BadRequestException("Invalid otp")
        }
    
        if(!UesrExist.otpExpiryAt || UesrExist.otpExpiryAt < new Date()){
            throw new BadRequestException("Otp expired")
        }}
}
