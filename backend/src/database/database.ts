import { DataSource } from "typeorm";
import { User } from "../Entity/UserSchema";

export const database = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "react_native_user",
    logging: false,
    synchronize: true, // you dont have to create a table on our own
    entities: [User],
  });