"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    // await mongoose.connect(process.env.DB_URL as string)
    await mongoose_1.default.connect("mongodb://127.0.0.1:27017/socialApp")
        // await mongoose.connect(devConfig.DB_URL as string)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log("Failed to connect to MongoDB", err));
};
exports.connectDB = connectDB;
