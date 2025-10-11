"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_AGENT = exports.GENDER = exports.SYS_ROLE = void 0;
var SYS_ROLE;
(function (SYS_ROLE) {
    SYS_ROLE["USER"] = "user";
    SYS_ROLE["ADMIN"] = "admin";
    SYS_ROLE["SUPER_ADMIN"] = "super_admin";
})(SYS_ROLE || (exports.SYS_ROLE = SYS_ROLE = {}));
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (exports.GENDER = GENDER = {}));
var USER_AGENT;
(function (USER_AGENT) {
    USER_AGENT["local"] = "local";
    USER_AGENT["google"] = "google";
    USER_AGENT["facebook"] = "facebook";
    USER_AGENT["apple"] = "apple";
})(USER_AGENT || (exports.USER_AGENT = USER_AGENT = {}));
