"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const User_1 = require("./Entity/User");
const routes_1 = __importDefault(require("./routes/routes"));
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "microservices",
    logging: false,
    synchronize: true,
    entities: [User_1.User],
});
AppDataSource.initialize()
    .then(() => {
    console.log("Connected to DataBase");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.listen(5000, () => {
    console.log("app running on port 5000 ");
});
app.get("/", (req, res) => {
    res.send("homepage");
});
// GET ALL USER
app.get("/api/users", async (req, res) => {
    try {
        const allUser = await User_1.User.find();
        res.status(200).json(allUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
// GET A USER
app.get("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const id_ = parseInt(id);
        const user = await User_1.User.findOne({ where: { id: id_ } });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
// UPDATE A USER
app.put("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const id_ = parseInt(id);
        const user = await User_1.User.findOne({ where: { id: id_ } });
        if (!user)
            return res.status(400).json("user does not exist");
        User_1.User.merge(user, req.body);
        await user?.save();
        res.send(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
//DELETE A USER
app.delete("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const id_ = parseInt(id);
        const user = await User_1.User.findOne({ where: { id: id_ } });
        if (!user)
            return res.status(400).json("user does not exist");
        await User_1.User.delete(id);
        res.send("user deleted");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
app.use('/api/auth', routes_1.default);
//# sourceMappingURL=index.js.map