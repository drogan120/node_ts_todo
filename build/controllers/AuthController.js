"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.index = function (req, res) {
        return res.send('halaman login');
    };
    AuthController.prototype.create = function (req, res) {
        return res.send('create user');
    };
    AuthController.prototype.update = function (req, res) {
        return res.send('update');
    };
    AuthController.prototype.show = function (req, res) {
        return res.send('show');
    };
    AuthController.prototype.destroy = function (req, res) {
        return res.send('destroy');
    };
    return AuthController;
}());
exports.default = new AuthController();
