"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.auth = void 0;
var Auth_1 = require("./Auth");
Object.defineProperty(exports, "auth", { enumerable: true, get: function () { return __importDefault(Auth_1).default; } });
var User_1 = require("./User");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return __importDefault(User_1).default; } });
