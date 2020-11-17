import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "This route is only for get requests" });
  }
  const id_seller = req.query.id;
  let sql = `SELECT * FROM sellers WHERE id_seller = ?`;
  const seller = await db.query(sql, id_seller, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
