import { userPatchSchema } from '@/schema/user'
import { getToken } from 'next-auth/jwt'

export default async function (req, res) {
  const token = await getToken({ req })

  if (!token) {
    res.status(401).send({ message: 'Unauthorized' })
    return
  }

  try {
    switch (req.method) {
      case 'PATCH':
        const value = await userPatchSchema.validateAsync(req.body)
        await prisma.user.update({
          where: { id: token.sub },
          data: value,
        })
        res.status(200).send({ success: true })
        break
      default:
        res.status(405).json({ message: 'This request cannot be processed' })
    }
  } catch (err) {
    return res.status(503).send({ message: 'Something went wrong' })
  }
}
