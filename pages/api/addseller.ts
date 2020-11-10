// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
   const db = mysql.createConnection({
      host: "muncakappdb.cezbagek1d6x.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "c3p4tc0ps",
      database: "muncakappdb",
    });
    
    db.connect((err) => {
      if (err) {
        throw err;
      } else {
        console.log("MYSQL IS CONNECTED ✅");
      }
    });
   //add user
   let post = {
      title: "Post one",
      body: "This is the first post, thankyou very much for reading this post",
    };
    let sql = "INSERT INTO posts SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created!");
    });
};
