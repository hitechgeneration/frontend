import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import ejs from "ejs";

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

    const mail = await ejs.renderFile(
      "D:\\Code\\web\\hitechgeneration\\frontend\\pages\\api\\views\\registration.ejs",
      { ...req.body }
    );
    console.log(mail);
    const mailOption = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: `Regjistrim nga ${req.body.emri_prindit} ${req.body.mbiemri_prindit} - ${req.body.email}`,
      html: mail as string,
    };

    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(400).send(JSON.stringify(err));
      } else {
        return res.send("mail sent");
      }
    });
  } else {
    return res.status(405).send("405 Method not allowed");
  }
}
