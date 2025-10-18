"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const DB_1 = require("../../../DB");
const error_1 = require("../../../utils/error");
exports.AuthProvider = {
    async checkOtp(verifyAccountDto) {
        const userRepository = new DB_1.UserRepository();
        // validate data
        if (!verifyAccountDto.email || !verifyAccountDto.otp) {
            throw new error_1.BadRequestException("email and otp are required");
        }
        // check if user is already exists
        const UesrExist = await userRepository.exsit({
            email: verifyAccountDto.email
        });
        if (!UesrExist) {
            throw new error_1.NotFoundException("User not found");
        }
        if (UesrExist.otp !== verifyAccountDto.otp) {
            throw new error_1.BadRequestException("Invalid otp");
        }
        if (!UesrExist.otpExpiryAt || UesrExist.otpExpiryAt < new Date()) {
            throw new error_1.BadRequestException("Otp expired");
        }
    }
};
