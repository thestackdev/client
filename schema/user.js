import joi from 'joi'

const userSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  username: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().min(6).required(),
  dateOfBirth: joi.date(),
})

export default userSchema
