"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../utils/error");
const DB_1 = require("../../DB");
const factory_1 = require("./factory");
const auth_provider_1 = require("./provider/auth.provider");
const utils_1 = require("../../utils");
class AuthService {
    constructor() {
        // private DBPostService = new DBPostService<IUser>()
        this.userRepository = new DB_1.UserRepository();
        this.authFactoryService = new factory_1.AuthFactoryService();
        // register
        this.register = async (req, res, next) => {
            // get data from request
            const registerDto = req.body;
            // check if user is already exists
            const userExists = await this.userRepository.exsit({ email: registerDto.email });
            if (userExists) {
                throw new error_1.ConflictException("user already exists");
            }
            const user = await this.authFactoryService.createUser(registerDto);
            // save into DB
            const createdUser = await this.userRepository.create(user);
            // send response
            res.status(201)
                .json({
                message: "User created successfully",
                success: true,
                data: { id: createdUser._id }
            });
        };
        // verify account
        this.verifyAccount = async (req, res, next) => {
            // get data from request
            const verifyAccountDto = req.body;
            await auth_provider_1.AuthProvider.checkOtp(verifyAccountDto);
            await this.userRepository.update({ email: verifyAccountDto.email }, { isVerified: true, $unset: { otp: "", otpExpiryAt: "" } });
            return res.sendStatus(204);
        };
        // login
        this.login = async (req, res, next) => {
            // get data from request
            const loginDto = req.body;
            //check if user exists
            const userExist = await this.userRepository.exsit({ email: loginDto.email });
            if (!userExist) {
                throw new error_1.ForbiddenException("User not found");
            }
            if (!await (0, utils_1.compareHash)(loginDto.password, userExist.password)) {
                throw new error_1.ForbiddenException("Invalid credentials");
            }
            // generate token
        };
    }
}
exports.default = new AuthService();
