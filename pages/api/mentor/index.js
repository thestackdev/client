import prisma from '@/lib/prisma'
import { mentorSchema } from '@/schema/mentor'
import { getToken } from 'next-auth/jwt'

export default async function (req, res) {
  const token = await getToken({ req })

  if (!token) {
    res.status(401).send({ message: 'Unauthorized' })
    return
  }

  try {
    switch (req.method) {
      case 'POST':
        const value = await mentorSchema.validateAsync(req.body)
        await prisma.mentor.create({
          data: {
            ...value,
            user: {
              connect: {
                id: token.sub,
              },
            },
          },
        })
        res.status(200).send({ success: true })
        break

      case 'GET':
        const mentor = await prisma.mentor.findUnique({
          where: {
            userId: token.sub,
          },
        })

        if (!mentor) {
          res.status(404).send({ message: 'Mentor not found' })
          return
        }
        res.status(200).send({ success: true, data: mentor })
        break

      default:
        res.status(405).json({ message: 'This request cannot be processed' })
    }
  } catch (err) {
    console.log(err)
    return res.status(503).send({ message: 'Something went wrong' })
  }
}
