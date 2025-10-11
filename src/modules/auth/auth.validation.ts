import { z } from "zod";
import { GENDER,USER_AGENT } from "../../utils/common/enum/index"
import { RegisterDto } from "./auth.dto";

export const registerSchema = z.object<RegisterDto>({
    fullName: z.string().min(3, "Name must be at least 3 characters long")as unknown as string ,
    email: z.email("Invalid email")as unknown as string,
    password: z.string().min(6, "Password must be at least 6 characters long")as unknown as string,
    phoneNumber:z.string().min(11,"Phone number must be at least 11 characters long")as unknown as string,
    gender:z.enum(GENDER)as unknown as GENDER,
    



})