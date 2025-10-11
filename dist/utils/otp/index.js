"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExpiryAt = exports.generateOtp = void 0;
const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000);
};
exports.generateOtp = generateOtp;
const generateExpiryAt = (time) => {
    return Date.now() + time;
};
exports.generateExpiryAt = generateExpiryAt;
