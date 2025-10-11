"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = __importStar(require("nodemailer"));
const dev_config_1 = require("../../../config/env/dev.config");
// export const sendEmail = async(email:string)=>{
//    nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // true for port 465, false for 587
//       auth: {
//         user: devConfig.EMAIL_USER, // Gmail address or SMTP user
//         pass: devConfig.EMAIL_PASS, // App password or SMTP password
//       },
//     }).sendMail({
//       from: devConfig.EMAIL_USER,
//       to: email,
//       subject: "Test Email",
//       text: "This is a test email sent using Node.js and Nodemailer.",
//     });
// }
const sendEmail = async () => {
    nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: dev_config_1.devConfig.EMAIL_USER,
            pass: dev_config_1.devConfig.EMAIL_PASS
        }
    });
};
exports.sendEmail = sendEmail;
