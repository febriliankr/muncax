import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(500).json({ message: "This route is only for POST requests" });
    return;
  }
  const id_seller = req.query.id;
  const property = Object.keys(req.body)[0];
  const updatedValue = req.body[property];
  let sql = `UPDATE sellers SET ${property} = ? WHERE id_seller = ?`;
  let query = db.query(
    sql,
    [updatedValue, id_seller],
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({message: `Post ${id_seller} Updated`, result});
    }
  );
};
