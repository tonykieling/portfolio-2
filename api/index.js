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
      from  : "Tony Kieling<tony.kieling@gmail.com>",
      bcc   : "Tony Kieling<tony.kieling@gmail.com>",
      // sender  : "Tony Kieling<tony.kieling@gmail.com>",
      replyTo  : "Tony Kieling<tony.kieling@gmail.com>",
      // from  : "Tony Kieling<tony.kieling@gmail.com>",

      to,
      subject,
      html,
    });

    return true;
  } catch(error) {
    // this error is related to the email part, 
    console.trace(error.message || message);
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
        <p> I will reply for you asap.
        <br>
        <br>
        <p>Kind regards from</p>
        <h3>Tony Kieling</h3>
        <p>https://tkwebdev.ca</p>
        <p>tony.kieling@gmail.com</p>
      </div>

      <div>
      ------------------------------------------
      </div>
      <div>
      original message
      </div>
      <div>
      ------------------------------------------
      </div>
      <div>
      <b>from:</b> "${person}&lt;${email}>"
      </div>
      <div>
      <b>to:</b> "Tony Kieling&lt;tony.kieling@gmail.com>"
      </div>
      <div>
      <b>message:</b>
      </div>
      <div style="color:blue">
      "${ message }"
      </div>
    </div>
  `);

  const success = await generalSender(email, " - automatic reply from Tony Kieling - ", content);
  // console.log("success:", success);
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
    // console.log("req.body", req.body);

    const { 
      person, 
      email,
      message,
      token
    } = req.body;

    // console.log("process.env.RECAPTCHA_SECRET_KEY:::", process.env.RECAPTCHA_SECRET_KEY);

    const secret_key = process.env.RECAPTCHA_SECRET_KEY || "process.env.RECAPTCHA_SECRET_KEY"



    if (!token)
      throw({
        notHuman: true,
        // this is temp just now, MUST DELETE it
        secret_key
      });
      // return res.json({
      //   notHuman: true,
      //   secret_key
      // });

    const human = await checkHuman(token, secret_key);
    // console.log("human verified result is => ", human);

    if (!human)
    // if (1)
      throw({
        notHuman: true,
        // this is temp just now, MUST DELETE it
        secret_key
      });
      // return res.json({
      //   notHuman: true,
      //   secret_key
      // });


    const emailSuccess = await sendEmail(person, email, message);
    // console.log("emailSuccess:", emailSuccess);
    // const emailSuccess = true;

    if (!emailSuccess)
      throw({
        error: true
      });

    return res.json({ 
        message: true,
        secret_key,
        test: "another field"
      });

  } catch(error) {
    // console.log("-----------", error);
    return res.json({ error: error.message || error });
  }
};