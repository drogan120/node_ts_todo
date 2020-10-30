"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// Controllers
var AuthController_1 = __importDefault(require("../controllers/AuthController"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.router = express_1.Router();
        this.routes();
    }
    Auth.prototype.routes = function () {
        this.router.get('/', AuthController_1.default.index);
        this.router.post('/', AuthController_1.default.create);
        this.router.get('/:id', AuthController_1.default.show);
        this.router.put('/:id', AuthController_1.default.update);
        this.router.delete('/:id', AuthController_1.default.destroy);
    };
    return Auth;
}());
exports.default = new Auth().router;
