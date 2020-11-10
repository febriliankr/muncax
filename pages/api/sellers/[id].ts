import { NextApiRequest, NextApiResponse } from "next";

export default function getSellerById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ byId: req.query.id, message: "getSellerById" });
}
