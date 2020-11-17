import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const id_seller = req.query.id;
    let sql = `DELETE FROM sellers WHERE id_seller = ?`;
  const query = await db.query(sql, id_seller, (err, result) => {
    if (err) throw err;
    res.send({result, message: `Seller with ID: ${id_seller} has been deleted.`});
  })
}
