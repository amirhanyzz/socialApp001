import jwt, { SignOptions } from "jsonwebtoken";
import { devConfig } from "../../config/env/dev.config";

// export const generateToken = ({}:{payload:object}) => {
//     return jwt.sign(payload, devConfig.JWT_SECRET, {
//         expiresIn: "1h",
//     });
// };
let secretKeys = devConfig.JWT_SECRET
export const generateToken = ({
    payload,
    secretKey =devConfig.JWT_SECRET,
    option
}: {
    payload: object,
    secretKey?: string,
    option?: SignOptions
}) => {
    if (!secretKey) {
        throw new Error("JWT_SECRET is not configured");
    }
    return jwt.sign(payload, secretKey, option);
};

export const verifyToken = ({ token, secretKey = devConfig.JWT_SECRET }: { token: string, secretKey?: string }) => {
    if (!secretKey) {
        throw new Error("JWT_SECRET is not configured v");
    }
    return jwt.verify(token, secretKey) as jwt.JwtPayload
}