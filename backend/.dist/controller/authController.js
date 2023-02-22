"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_1 = require("../Entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = async (req, res) => {
    try {
        const hashPassword = bcrypt_1.default.hashs;
        const user = User_1.User.create(req.body);
        await user.save();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User_1.User.findOne({ where: { username: username } });
        if (!user)
            return res.status(400).json({ message: "User does not exist" });
        if (password !== user.password) {
            res.status(400).json({ message: "input correct password" });
        }
        else {
            res.status(200).json({ message: "login successfull" });
        }
    }
    catch (error) {
        res.send(error);
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map