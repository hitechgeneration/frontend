import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export default async function SendMail(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const views = path.join(process.cwd(), "views");

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mail = await ejs.renderFile(views + "/registration.ejs", {
      ...req.body,
    });
    const mailData = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: `Regjistrim nga ${req.body.emri_prindit} ${req.body.mbiemri_prindit} - ${req.body.email}`,
      html: mail as string,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    return res.status(200).send("mail sent");
  } else {
    return res.status(405).send("405 Method not allowed");
  }
}
