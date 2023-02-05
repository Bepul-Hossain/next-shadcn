import { NextApiRequest, NextApiResponse } from 'next'

const apiTest = (req: NextApiRequest, res: NextApiResponse) => {
  const number = Math.floor(Math.random()*100)
  res.status(200).json({ text: 'http://localhost:3000/api/apiTest' , id: number, createdDate: new Date()})
}

export default apiTest