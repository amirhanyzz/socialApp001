import jwt, { SignOptions } from "jsonwebtoken";
import { devConfig } from "../../config/env/dev.config";

// export const generateToken = ({}:{payload:object}) => {
//     return jwt.sign(payload, devConfig.JWT_SECRET, {
//         expiresIn: "1h",
//     });
// };

export const generateToken = ({
    payload,
    secretKey=devConfig.JWT_SECRET,
    option
}:{
    payload:object,
    secretKey?:string,
    option?:SignOptions
}) => {
    if(!secretKey){
        throw new Error("JWT_SECRET is not configured");
    }
    return jwt.sign(payload,secretKey as string,option);
};
