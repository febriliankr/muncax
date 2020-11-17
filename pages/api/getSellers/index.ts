import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "This route is only for get requests" });
  }
  const sellers = await db.query(`
    SELECT *
    FROM sellers
  `);
  res.end(JSON.stringify({ sellers }));
};