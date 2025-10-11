"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const mongoose_1 = require("mongoose");
const userModel = (0, mongoose_1.model)("User", user_schema_1.userSchema);
exports.default = userModel;
