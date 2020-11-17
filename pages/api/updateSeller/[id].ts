import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(500).json({ message: "This route is only for POST requests" });
  }
  const id_seller = req.query.id;
  const { credential, newValue } = req.body;
  let sql = `UPDATE sellers SET ? = ? WHERE id = ?`;
  let query = db.query(sql, credential, newValue, id_seller, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`Post ${id_seller} Updated`);
  });
};
