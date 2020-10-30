"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [
    { id: 1, name: "ali" },
    { id: 2, name: "amu" }
];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.json(data);
    };
    UserController.prototype.create = function (req, res) {
        var _a = req.body, id = _a.id, name = _a.name;
        data.push({
            id: id,
            name: name
        });
        return res.send('data has been added');
    };
    UserController.prototype.show = function (req, res) {
        var id = req.params.id;
        var person = data.find(function (item) { return item.id == id; });
        if (!person) {
            return res.send({ messages: "data dengan id " + id + " tidak di temukan" });
        }
        return res.send(person);
    };
    UserController.prototype.update = function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var person = data.find(function (items) { return items.id == id; });
        if (!person) {
            return res.send({ messages: "data dengan id " + id + " tidak di temukan" });
        }
        else {
            person.name = name;
            return res.send("data dengan id " + id + " berhasil di update");
        }
    };
    UserController.prototype.destroy = function (req, res) {
        var id = req.params.id;
        var person = data.filter(function (items) { return items.id != id; });
        return res.send(person);
    };
    return UserController;
}());
exports.default = new UserController();
