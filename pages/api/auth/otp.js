import otpSchema from '@/schema/otp'
import { Prisma, PrismaClient } from '@prisma/client'
import joi from 'joi'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

const prisma = new PrismaClient()

const generateOTP = () => {
  const digits = '0123456789'
  let OTP = ''
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}

export default async function (req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const value = await otpSchema.validateAsync(req.query)

        const mailOptions = {
          from: `Youvatar ${process.env.EMAIL_SERVER_USER}`,
          to: value.email,
          subject: 'Confirm your account',
          html: generateOTP(),
        }
        await prisma.otp.create({
          data: {
            email: value.email,
            otp: mailOptions.html,
          },
        })
        await transporter.sendMail(mailOptions)
        res.status(200).send({ success: true })
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            res
              .status(400)
              .send({ message: 'An OTP has already sent to your email' })
            return
          }
        }
        console.log(err)
        res.status(401).send({ message: 'Something went wrong' })
      }
      break
    case 'POST':
      try {
        const value = await otpSchema.validateAsync(req.query)
        const otp = await prisma.otp.findFirst({
          where: {
            email: value.email,
          },
        })
        if (otp.otp === value.otp) {
          res.status(200).send({ success: true })
        } else {
          res.status(401).send({ message: 'Wrong OTP' })
        }
      } catch (err) {
        if (err instanceof joi.ValidationError) {
          console.log(err)
          res.status(400).send({ message: err.message })
        }
      }
      break
    default:
      res.status(405).json({ message: 'This request cannot be processed' })
  }
}
