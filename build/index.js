"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.routes();
        this.plugins();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default("dev"));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send('oke');
        });
        this.app.route('/').post(function (req, res) {
            res.send(req.body);
        });
    };
    return App;
}());
var PORT = 3000;
var app = new App().app;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
