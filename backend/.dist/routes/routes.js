"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const route = express_1.default.Router();
// REGISTER A USER
route.post("/api/auth");
// LOGIN A USER
route.post("/api/auth", authController_1.login);
exports.default = route;
//# sourceMappingURL=routes.js.map