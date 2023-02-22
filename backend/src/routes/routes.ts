import express from 'express'
import { getUser, login, register, updateUser } from '../controller/authController'

const route = express.Router()


// REGISTER A USER
route.post("/register",  register)


// LOGIN A USER
route.post("/login", login)

// GET A USER
route.get("/:id", getUser)

// UPDATE A USER
route.put("/:id", updateUser)







export default route