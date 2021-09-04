"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.password
  }
});


const generalSender = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from  : "Tony Kieling<tony.kieling@gmail.com>",
      to,
      subject,
      html,
    });

    return true;
  } catch(error) {
    // this error is related to the email part, 
    // console.trace(error.message || message);
    return false;
  }
};


const sendEmail = async (person, email, message) => {
  // it sends an email to the user confirming the procedure
  const content = (`
    <div>
      <div>
        <p>Hi <b>${person}</b></p>
        <p>Thanks for your email.</p>
        <br>
        <br>
        <br>
        <p> I will reply for you asap.

        <p>Kind regards from</p>
        <h3>Tony Kieling</h3>
      </div>

      ------------------------------------------
      original message
      ------------------------------------------
      from: "${person}<${email}>"
      to: "Tony Kieling<tony.kieling@gmail.com>"
      message:
      "${ message }"
    </div>
  `);

  const success = await generalSender(email, " - automatic reply from Tony Kieling - ", content);
  // console.log("success:", success);
  return (success ? true : false);
};



module.exports = async (req, res) => {
  try {
    // console.log("req.body", req.body);

    const { 
      person, 
      email,
      message
    } = req.body;

    const emailSuccess = await sendEmail(person, email, message);
    // console.log("emailSuccess:", emailSuccess);

    return res.json(emailSuccess ? { message: true } : { error: true });
  } catch(error) {
    // console.log("-----------", error.message);
    return res.json({ error: error.message || error });
  }
};