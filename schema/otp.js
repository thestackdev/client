import joi from 'joi'

const otpSchema = joi.object({
  email: joi.string().email().required(),
  otp: joi.string().length(6),
})

export default otpSchema
