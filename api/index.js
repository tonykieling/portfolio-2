"use strict";
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

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
      from  : process.env.TK_auto,
      cc   : process.env.TK,
      // sender  : process.env.TK,
      replyTo  : process.env.TK,
      // from  : process.env.TK,

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
        <p> I will reply for you asap.</p>
        <br>
        <p style="margin: 1rem 0">Kind regards from</p>
        <h3>Tony Kieling</h3>
        <p style="margin:0 0.5rem">https://tkwebdev.ca</p>
        <p style="margin: 0 0.5rem">tony.kieling@gmail.com</p>
      </div>

      <div style="border: 1px double blue; background-color: lightgreen; margin: 0.5rem 1rem; width: 90%">
        <div style="border: 1px solid black; text-align: center">
          <b>original message</b>
        </div>
        <p style="margin: 0">
          <b>from:</b> "${person}&lt;${email}>"
        </p>
        <p style="margin: 0">
          <b>to:</b> "Tony Kieling&lt;tony.kieling@gmail.com>"
        </p>
        <p style="margin: 0">
          <b>message:</b>
        </p>
        <p style="color:blue; margin: 0">
          "${ message }"
        </p>
      </div>
    </div>
  `);

  const success = await generalSender(email, " - automatic reply from Tony Kieling - ", content);
  return (success ? true : false);
};


// it checks the token sent by the contact form
const checkHuman = async (token, secret_key) => {
  const check = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`, 
    { 
      method: "POST"
    }
  );
  // console.log("check --- ", check);
  const data = await check.json();
  // console.log("data ---", data);
  return data.success;
};


module.exports = async (req, res) => {
  try {

    const { 
      person, 
      email,
      message,
      token
    } = req.body;

    const secret_key = process.env.RECAPTCHA_SECRET_KEY || "process.env.RECAPTCHA_SECRET_KEY"



    if (!token)
      throw({
        notHuman: true
      });

    const human = await checkHuman(token, secret_key);

    if (!human)
      throw({
        notHuman: true
      });


    const emailSuccess = await sendEmail(person, email, message);

    if (!emailSuccess)
      throw({
        error: true
      });

    return res.json({ 
        message: true
      });

  } catch(error) {
    return res.json({ error: error.message || error });
  }
};