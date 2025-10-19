import {Schema} from "mongoose";
import { IUser } from "../../../utils/common/interface";
import { SYS_ROLE, USER_AGENT ,GENDER } from "../../../utils/common/enum";
import { sendEmail } from "../../../utils/email";
import { devConfig } from "../../../config/env/dev.config";
      




export const userSchema = new Schema<IUser>({
    firstName:{
        type:String,
        minlength:2,
        maxlength:20,
        required:true,
        trim:true,
        

    },
    lastName:{
        type:String,
        minlength:2,
        maxlength:20,
        required:true,
        trim:true
    },
    email:{type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{type:String,
        required:function(){
           if(this.userAgent === USER_AGENT.google)return false;
           return true;
           } 
        },
    credentialUpdatedAt:{
        type:Date
    },
    phoneNumber:{type:String,
        maxlength:20,
        trim:true
    },
    role:{type:Number,
        enum:SYS_ROLE,
        default:SYS_ROLE.USER
    },
    gender:{type:Number,
        enum:GENDER,
        default:GENDER.MALE
    },
    userAgent:{type:Number,
        enum:USER_AGENT,
        default:USER_AGENT.local
    },
 isVerified:{type:Boolean,
    default:false
 },
    createdAt:Date,
    updatedAt:Date,
    otp: {type:String},
    otpExpiryAt: {type:Date}
},{timestamps:true})

userSchema.virtual("fullName").get(function(){
    return this.firstName+" "+this.lastName
})
//   .set(function(fullName:string){
//     this.firstName = fullName.split(" ")[0] as string;
//     this.lastName = fullName.split(" ")[1] as string;
// })

.set(function(fullName:string){
    const [firstName, lastName] =fullName.split(" ");
    this.firstName = firstName as string;
    this.lastName = lastName as string;
})


 userSchema.pre('save',function(next){
    console.log("pre middleware");
    // ana saybo 3shan ashof eldata 
    console.log({this:this});
    next()
 })

 userSchema.pre("save",async function(next){
    if(this.userAgent != USER_AGENT.google && this.isNew ===true)


   await sendEmail({
    from: devConfig.EMAIL_USER, 
        to: this.email,
        subject: "Verify your email",
        text: "Please verify your email address.",
        html: `<h1>this is your ${this.otp}.</h1>`
    })  
}) 

export default userSchema
 