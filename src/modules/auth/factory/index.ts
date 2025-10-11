import { SYS_ROLE, USER_AGENT } from "../../../utils/common/enum";
import { generateExpiryAt, generateOtp } from "../../../utils/otp";
import { RegisterDto } from "../auth.dto";
import { User } from "../entity";
import { generateHash } from "../../../utils/hash";



export class AuthFactoryService{
 
     async createUser(registerDTO: RegisterDto){
        const user = new User();
       user.fullName = registerDTO.fullName as string;
        user.email = registerDTO.email;
        user.password = await generateHash(registerDTO.password);
        user.phoneNumber = registerDTO.phoneNumber as string; // encrypt
        user.otp = generateOtp()
        user.otpExpiryAt = generateExpiryAt(1000 * 60 * 60 * 5) as unknown as Date;
        user.credentialUpdatedAt = Date.now() as unknown as Date;
        user.gender = registerDTO.gender;
        user.role = SYS_ROLE.USER;
        user.userAgent = USER_AGENT.local;    
        user.isVerified = false; 
    
        return user
    }
 
}
