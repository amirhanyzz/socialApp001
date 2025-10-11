"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const AbstractRepository_1 = require("../../AbstractRepository");
const user_model_1 = __importDefault(require("./user.model"));
class UserRepository extends AbstractRepository_1.AbstractRepository {
    constructor() {
        super(user_model_1.default);
    }
    async getAllUsers() {
        return await this.model.find();
    }
}
exports.UserRepository = UserRepository;
