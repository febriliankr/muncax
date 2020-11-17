import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../config/database";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(500).json({ message: "This route is only for POST requests" });
    return;
  }
  const {
    nama_seller,
    tgllahir_seller,
    kota_seller,
    alamat_seller,
    nohp_seller,
    gender_seller,
    email_seller,
    username_seller,
    password_seller,
  } = req.body;

  const data = [
    nama_seller,
    tgllahir_seller,
    kota_seller,
    alamat_seller,
    nohp_seller,
    gender_seller,
    email_seller,
    username_seller,
    password_seller,
  ];

  // const sql = `INSERT INTO sellers (nama_seller, tgllahir_seller, kota_seller, alamat_seller, nohp_seller, gender_seller, email_seller, username_seller, password_seller) VALUES ("${nama_seller}", "${tgllahir_seller}", "${kota_seller}", "${alamat_seller}", "${nohp_seller}", "${gender_seller}", "${email_seller}", "${username_seller}", "${password_seller}")`;

  const sql = `INSERT INTO sellers SET nama_seller = ?, tgllahir_seller = ?, kota_seller = ?, alamat_seller = ?, nohp_seller = ?, gender_seller = ?, email_seller = ?, username_seller = ?, password_seller = ?`;

  const query = await db.query(
    sql, data,
    (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send({
        result,
        message: "User has been sucessfully added!",
        seller_id: result.insertId,
      });
    }
  );
};
