"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactoryService = void 0;
const enum_1 = require("../../../utils/common/enum");
const otp_1 = require("../../../utils/otp");
const entity_1 = require("../entity");
const hash_1 = require("../../../utils/hash");
class AuthFactoryService {
    async createUser(registerDTO) {
        const user = new entity_1.User();
        user.fullName = registerDTO.fullName;
        user.email = registerDTO.email;
        user.password = await (0, hash_1.generateHash)(registerDTO.password);
        user.phoneNumber = registerDTO.phoneNumber; // encrypt
        user.otp = (0, otp_1.generateOtp)();
        user.otpExpiryAt = (0, otp_1.generateExpiryAt)(1000 * 60 * 60 * 5);
        user.credentialUpdatedAt = Date.now();
        user.gender = registerDTO.gender;
        user.role = enum_1.SYS_ROLE.USER;
        user.userAgent = enum_1.USER_AGENT.local;
        user.isVerified = false;
        return user;
    }
}
exports.AuthFactoryService = AuthFactoryService;
