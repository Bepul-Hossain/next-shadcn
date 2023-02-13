import data from '@/data/data.json';
import { NextApiRequest, NextApiResponse } from 'next'
const Hello = (req: NextApiRequest, res: NextApiResponse) => {
    
    res.status(200).json(data)
  }
  
export default Hello;