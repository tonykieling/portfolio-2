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
        <br>
        <p> I will reply for you asap.

        <p>Kind regards from</p>
        <h3>Tony Kieling</h3>
        <h2>https://tkwebdev.ca</h2>
        <h2>tony.kieling@gmail.com</h2>
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
  console.log("success:", success);
  return (success ? true : false);
};



module.exports = async (req, res) => {
  try {
    console.log("req.body", req.body);

    const { 
      person, 
      email,
      message,
      password
    } = req.body;


    // if (password !== process.env.senderPassword) {
    //   console.log("password issues");
      return res.json({ message: true });
    // }

    const emailSuccess = await sendEmail(person, email, message);
    console.log("emailSuccess:", emailSuccess);

    return res.json(emailSuccess ? { message: true } : { error: true });
  } catch(error) {
    // console.log("-----------", error.message);
    return res.json({ error: error.message || error });
  }
};