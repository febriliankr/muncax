import { NextApiRequest, NextApiResponse } from "next";

export default function getAllSellers(req: NextApiRequest, res: NextApiResponse) {
  
  if(req.method !== 'GET'){
    res.status(500).json({message: "This route is only for get requests"})
  }
  res.json({ hello: "world", method: req.method });
}
