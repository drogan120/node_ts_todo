"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// Controller
var UserController_1 = __importDefault(require("../controllers/UserController"));
var User = /** @class */ (function () {
    function User() {
        this.router = express_1.Router();
        this.routes();
    }
    User.prototype.routes = function () {
        this.router.get('/', UserController_1.default.index);
        this.router.post('/', UserController_1.default.create);
        this.router.get('/:id', UserController_1.default.show);
        this.router.put('/:id', UserController_1.default.update);
        this.router.delete('/:id', UserController_1.default.destroy);
    };
    return User;
}());
exports.default = new User().router;
