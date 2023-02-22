import { Request, Response } from "express";
import { User } from "../Entity/UserSchema";
import bcrypt from "bcrypt";
import { login_validation, register_validation } from "../joiValidate";
import jwt from "jsonwebtoken";

// REGISTER

export const register = async (req: Request, res: Response) => {
  try {
    const {firstName, lastName,  email, password }: any = req.body;

  
    const firstName_ = firstName.replace(/\s/g, "");
    const lastName_ = lastName.replace(/\s/g, "");
    const email_ = email.replace(/\s/g, "");
    const password_ = password.replace(/\s/g, "");
    const { error } = register_validation.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const userExist = await User.findOne({ where: { email: email_ } });
    if (userExist) return res.status(400).json("Email already in use");
    const hashPassword = bcrypt.hashSync(password_, 10);
    const user = User.create({
      firstName: firstName_,
      email: email_,
      lastName: lastName_,
      password: hashPassword,
    });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { error } = login_validation.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json("User does not exist");
    const decryptedPassword = bcrypt.compareSync(password, user.password);
    if (!decryptedPassword) {
      res.status(400).json("input correct password" );
    } else {
      const token = jwt.sign(
        { id: user.id, firstName:user.firstName, lastName:user.lastName, email: user.email },
        "mytoken"
      );
      res.status(200).json(token);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET A USER
export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const id_ = parseInt(id);
    const user = await User.findOne({ where: { id: id_ } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE A USER
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const id_ = parseInt(id);
    const user = await User.findOne({ where: { id: id_ } });
    if (!user) return res.status(400).json("user does not exist");
    User.merge(user, req.body);
    await user?.save();
    res.send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
// DELETE A USER
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const id_ = parseInt(id);
    const user = await User.findOne({ where: { id: id_ } });
    res.send("user deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
