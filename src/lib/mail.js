var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});


export default function sendVikingMail(email, { title, body }) {
  var mailOptions =  {
    from: '"Arno" <info@arnocuyvers.be>',
    to: email,
    subject: title,
    html: body
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return ('Error while sending email' + err)
    }
    else {
      return ('Email sent')
    }
  });
}

