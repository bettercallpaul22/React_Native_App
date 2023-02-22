import joi from "joi"


export const login_validation = joi.object({
    email: joi.string().required().min(3).email().trim().lowercase(),
    password: joi.string().required().min(6).trim()
  });
  
export const register_validation = joi.object({
 
    firstName: joi.string().required().min(3).trim().lowercase(),
    lastName: joi.string().required().min(3).trim().lowercase(),
    email: joi.string().required().min(3).email().trim().lowercase(),
    password: joi.string().required().min(6).trim(),
  });