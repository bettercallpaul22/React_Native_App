import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import cors from "cors";
import authRoute from "./routes/routes";
import { database } from "./database/database";


database.initialize()
  .then(() => {
    console.log("Connected to Postgres DataBase");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app = express(); 
app.use(cors());
app.use(bodyParser.json());
app.listen(5000, () => {
  console.log("app running on port 5000 ");
});

app.get("/", (req: Request, res: Response) => {
  res.send("homepage");
});

// // GET ALL USER
// app.get("/api/users", async (req: Request, res: Response) => {
//   try {
//     const allUser = await User.find();
//     res.status(200).json(allUser);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //DELETE A USER
// app.delete("/api/user/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const id_ = parseInt(id);
//     const user = await User.findOne({ where: { id: id_ } });
//     if (!user) return res.status(400).json("user does not exist");
//     await User.delete(id);
//     res.send("user deleted");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// AUTH ROUTE
app.use("/api/auth", authRoute);
