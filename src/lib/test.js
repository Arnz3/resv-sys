
const HEADER = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

<style>
    body {
        background-color: white;
    }

    span {
        width: 100;
        height: 150;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div {
        border: 3px solid white;
        width: 30vw;
        height: 70vh;
        margin-top: 10vh;
        text-align: center;
        color: black;
    }

    div > img {
        width: 300px;
    }
</style>
`

function mailNrKlant({voornaam, naam, datum, email, phone, aantal, time, opm}){
  let body = `
    </head>
    <body>
        <span>
          <div>
              <p>Wij hebben uw tafelreservatie met onderstaande gegevens goed ontvangen.</p><br>
              <p>Deze reservatie is pas definitief na expliciete bevestiging!</p><br>
              <p>Op maandag en dinsdag is de Viking gesloten en antwoorden we niet op mails</p><br>

              <p><b>Datum: </b>${datum}</p>
              <p><b>Naam: </b>${voornaam} ${naam}</p>
              <p><b>E-mail: </b>${email}</p>
              <p><b>Telefoon: </b>${phone}</p>
              <p><b>Aantal: </b>${aantal}</p>
              <p><b>Aankomst: </b>${time}</p>
              <p><b>Opmerking: </b>${opm}</p>

              <br><a>Klik hier om uw reservering te annuleren.</a>

          </div>
        </span>
    </body>
    </html>
  `

  return (HEADER + body)
}



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


function sendVikingMail(email, { title, body }) {
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


sendVikingMail("cuyversarno@gmail.com", {title: "test", body: mailNrKlant({
  voornaam: "Arno",
  naam: "Cuvyers",
  datum: "9/11/2001",
  email: "cuyversarno@gmail.com",
  phone: "0468348434",
  aantal: "4",
  time: "08:00",
  opm: "dit is een test!"
})});
