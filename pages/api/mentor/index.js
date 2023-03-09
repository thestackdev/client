export default async function (req, res) {
  const token = await getToken({ req })

  if (!token) {
    res.status(401).send({ message: 'Unauthorized' })
    return
  }

  try {
    switch (req.method) {
      case 'POST':
        res.status(200).send({ success: true })
        break
      default:
        res.status(405).json({ message: 'This request cannot be processed' })
    }
  } catch (err) {
    return res.status(503).send({ message: 'Something went wrong' })
  }
}
