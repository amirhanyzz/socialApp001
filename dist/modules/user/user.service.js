"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../../DB/model/user/user.repository");
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
        this.getProfile = async (req, res, next) => {
            let user = await this.userRepository.getOne({ _id: req.params.id });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json({ message: "done", success: true, data: { user: req.user } });
        };
    }
}
exports.default = new UserService();
