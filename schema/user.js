import joi from 'joi'

export const registerUserSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  username: joi.string().required(),
  email: joi.string().email(),
  phone: joi.string().length(10),
  password: joi.string().min(6).required(),
  dateOfBirth: joi.date(),
  source: joi.string().required().valid('email', 'phone'),
})

export const userPatchSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  dateOfBirth: joi.date(),
  intrests: joi.object(),
  image: joi.string(),
  profileColor: joi.string(),
  isMentor: joi.boolean(),
})

export const passwordSchema = joi.object({
  password: joi.string().min(6).required(),
  source: joi.string().required().valid('email', 'phone'),
  email: joi.string().email(),
  phone: joi.string().length(10),
})
