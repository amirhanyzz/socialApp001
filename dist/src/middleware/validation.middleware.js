"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const error_1 = require("../utils/error");
const isValid = (schema) => {
    return (req, res, next) => {
        let data = { ...req.body, ...req.query, ...req.params };
        const result = schema.safeParse(data);
        if (!result.success) {
            let errMsg = result.error.issues.map((issue) => ({
                path: issue.path[0],
                message: issue.message
            }));
            throw new error_1.BadRequestException("Validation Error", errMsg);
        }
        next();
    };
};
exports.isValid = isValid;
