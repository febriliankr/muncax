import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

// THE ROUTE IS /api/sellerauth/login

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "This route is only for get requests" });
  }
  const { username_seller, password_seller } = req.body;
  let sql = `SELECT * FROM sellers WHERE username_seller = ? AND password_seller = ?`;
  const seller = await db.query(
    sql,
    username_seller,
    password_seller,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};
