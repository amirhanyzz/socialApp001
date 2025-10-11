"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../../../utils/common/enum");
exports.userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true,
        trim: true
    },
    email: { type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: { type: String,
        required: function () {
            if (this.userAgent === enum_1.USER_AGENT.google)
                return false;
            return true;
        }
    },
    credentialUpdatedAt: {
        type: Date
    },
    phoneNumber: { type: String,
        maxlength: 20,
        trim: true
    },
    role: { type: String,
        enum: enum_1.SYS_ROLE,
        default: enum_1.SYS_ROLE.USER
    },
    gender: { type: String,
        enum: enum_1.GENDER,
        default: enum_1.GENDER.MALE
    },
    userAgent: { type: String,
        enum: enum_1.USER_AGENT,
        default: enum_1.USER_AGENT.local
    },
    isVerified: { type: Boolean,
        default: false
    },
    createdAt: Date,
    updatedAt: Date,
    otp: { type: String },
    otpExpiryAt: { type: Date }
}, { timestamps: true });
exports.userSchema.virtual("fullName").get(function () {
    return this.firstName + " " + this.lastName;
})
    //   .set(function(fullName:string){
    //     this.firstName = fullName.split(" ")[0] as string;
    //     this.lastName = fullName.split(" ")[1] as string;
    // })
    .set(function (fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
});
exports.default = exports.userSchema;
