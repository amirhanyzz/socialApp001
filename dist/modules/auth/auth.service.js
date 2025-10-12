"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../utils/error");
const DB_1 = require("../../DB");
const factory_1 = require("./factory");
const email_1 = require("../../utils/email");
const dev_config_1 = require("../../config/env/dev.config");
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
            // send email
            await (0, email_1.sendEmail)({
                from: dev_config_1.devConfig.EMAIL_USER,
                to: registerDto.email,
                subject: "Confirm Email",
                html: `<h1>Confirm Email</h1>
   <h2>your otp is ${user.otp}</h2>
   <p>Click on the link to confirm your email</p>`
            });
            // send response
            res.status(201)
                .json({
                message: "User created successfully",
                success: true,
                data: createdUser
            });
        };
    }
}
exports.default = new AuthService();
