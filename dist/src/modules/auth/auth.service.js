"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../utils/error");
const DB_1 = require("../../DB");
const factory_1 = require("./factory");
class AuthService {
    // private DBPostService = new DBPostService<IUser>()
    userRepository = new DB_1.UserRepository();
    authFactoryService = new factory_1.AuthFactoryService();
    constructor() { }
    // register
    register = async (req, res, next) => {
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
            data: createdUser
        });
    };
}
exports.default = new AuthService();
