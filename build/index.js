"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.routes();
        this.plugins();
    }
    App.prototype.plugins = function () {
        this.app.use(body_parser_1.default.json);
        this.app.use(morgan_1.default("dev"));
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send({ messages: "heelo" });
        });
        this.app.route('/users').post(function (req, res) {
            res.send(req.body);
        });
    };
    return App;
}());
var PORT = 3000;
var app = new App().app;
app.listen(PORT, function () {
    console.log("Server is running on http://127.0.0.1:" + PORT);
});
