"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REACTION = exports.USER_AGENT = exports.GENDER = exports.SYS_ROLE = void 0;
var SYS_ROLE;
(function (SYS_ROLE) {
    SYS_ROLE[SYS_ROLE["USER"] = 0] = "USER";
    SYS_ROLE[SYS_ROLE["ADMIN"] = 1] = "ADMIN";
    SYS_ROLE[SYS_ROLE["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
})(SYS_ROLE || (exports.SYS_ROLE = SYS_ROLE = {}));
var GENDER;
(function (GENDER) {
    GENDER[GENDER["MALE"] = 0] = "MALE";
    GENDER[GENDER["FEMALE"] = 1] = "FEMALE";
})(GENDER || (exports.GENDER = GENDER = {}));
var USER_AGENT;
(function (USER_AGENT) {
    USER_AGENT[USER_AGENT["local"] = 0] = "local";
    USER_AGENT[USER_AGENT["google"] = 1] = "google";
    USER_AGENT[USER_AGENT["facebook"] = 2] = "facebook";
    USER_AGENT[USER_AGENT["apple"] = 3] = "apple";
})(USER_AGENT || (exports.USER_AGENT = USER_AGENT = {}));
var REACTION;
(function (REACTION) {
    REACTION[REACTION["LIKE"] = 0] = "LIKE";
    REACTION[REACTION["LOVE"] = 1] = "LOVE";
    REACTION[REACTION["CARE"] = 2] = "CARE";
    REACTION[REACTION["ANGRY"] = 3] = "ANGRY";
})(REACTION || (exports.REACTION = REACTION = {}));
