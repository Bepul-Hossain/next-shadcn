import { NextApiRequest, NextApiResponse } from 'next'

const apiTest = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Data from api' })
}

export default apiTest