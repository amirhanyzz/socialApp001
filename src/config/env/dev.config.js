"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devConfig = void 0;
exports.devConfig = {
    // PORT:3000,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS
};
