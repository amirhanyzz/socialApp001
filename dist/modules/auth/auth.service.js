"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../utils/error");
const DB_1 = require("../../DB");
const factory_1 = require("./factory");
class AuthService {
    constructor() {
        // private DBPostService = new DBPostService<IUser>()
        this.userRepository = new DB_1.UserRepository();
        this.authFactoryService = new factory_1.AuthFactoryService();
        // register
        this.register = async (req, res, next) => {
            // get data from request
            const registerDto = req.body;
            // validate data
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
                data: {
                    id: createdUser._id,
                }
            });
        };
        this.verifyAccount = async (req, res, next) => {
            // get data from request
            const verifyAccountDto = req.body;
            // validate data
            if (!verifyAccountDto.email || !verifyAccountDto.otp) {
                throw new error_1.BadRequestException("email and otp are required");
            }
            // check if user is already exists
            const UesrExist = await this.userRepository.exsit({ email: verifyAccountDto.email });
            if (!UesrExist) {
                throw new error_1.NotFoundException("User not found");
            }
            if (UesrExist.otp !== verifyAccountDto.otp) {
                throw new error_1.BadRequestException("Invalid otp");
            }
            if (!UesrExist.otpExpiryAt || UesrExist.otpExpiryAt < new Date()) {
                throw new error_1.BadRequestException("Otp expired");
            }
        };
    }
}
exports.default = new AuthService();
