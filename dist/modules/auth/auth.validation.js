"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
const index_1 = require("../../utils/common/enum/index");
exports.registerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(3, "Name must be at least 3 characters long"),
    email: zod_1.z.email("Invalid email"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
    phoneNumber: zod_1.z.string().min(11, "Phone number must be at least 11 characters long"),
    gender: zod_1.z.enum(index_1.GENDER),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.email("Invalid email"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
