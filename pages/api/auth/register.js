import userSchema from '@/schema/user'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const user = await prisma.user.findUnique({
          where: {
            username: req.query?.username,
          },
        })
        if (!user) {
          res.status(200).send({ message: 'username is available' })
        } else {
          res.status(401).send({ message: 'username already taken' })
        }
      } catch (err) {
        console.log(err)
        res.status(401).send({ message: 'Something went wrong' })
      }
      break
    case 'POST':
      try {
        const value = await userSchema.validateAsync(req.body)
        const hash = await bcrypt.hash(value.password, 10)
        await prisma.user.create({
          data: {
            username: value.username,
            password: hash,
            email: value.email,
            firstName: value.firstName,
            lastName: value.lastName,
            dateOfBirth: value.dateOfBirth,
          },
        })
        res.status(200).send({ success: true })
      } catch (err) {
        return res.status(503).send({ message: err.message })
      }
      break
    default:
      res.status(405).json({ message: 'This request cannot be processed' })
  }
}
