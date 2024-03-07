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

export default function annulatieNrViking({voornaam, naam, datum, email, phone, aantal, time, opm}){
  let body = `
  </head>
  <body>
      <span>
      <div>
          <p>${voornaam} heeft zijn/haar tafelreservatie geannuleerd</p><br>

          <p><b>Datum: </b>${datum}</p>
          <p><b>Naam: </b>${voornaam} ${naam}</p>
          <p><b>E-mail: </b>${email}</p>
          <p><b>Telefoon: </b>${phone}</p>
          <p><b>Aantal: </b>${aantal}</p>
          <p><b>Aankomst: </b>${time}</p>
          <p><b>Opmerking: </b>${opm}</p>
          
          <br><a>Je kan deze nog altijd bekijken in de geschiedenis</a>
      </div>
      </span>
  </body>
  </html>
  `
  return (HEADER + body)
}

export default function annulatieNrKlant({voornaam, datum, time}){
  let body = `
  </head>
  <body>
      <span>
      <div>
          <p>Beste ${voornaam},</p><br>
          <p>Uw tafelreservatie voor ${datum} om ${time} werd succelvol geannuleerd.</p><br>
          <p>Groeten</p>
          <p>Viking team</p>
      </div>
      </span>
  </body>
  </html>
  `

  return(HEADER + body)
}


export default function mailNrKlant({voornaam, naam, datum, email, phone, aantal, time, opm}){
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

export default function mailNrViking({voornaam, naam, datum, email, phone, aantal, time, opm}){
  let body = `
    </head>
    <body>
        <div>
            <p>Er is een nieuwe tafelreservatie</p><br>

            <p><b>Datum: </b>${datum}</p>
            <p><b>Naam: </b>${voornaam} ${naam}</p>
            <p><b>E-mail: </b>${email}</p>
            <p><b>Telefoon: </b>${phone}</p>
            <p><b>Aantal: </b>${aantal}</p>
            <p><b>Aankomst: </b>${time}</p>
            <p><b>Opmerking: </b>${opm}</p>
            
            <br><a>Klik hier om te bekijken</a>
        </div>
    </body>
    </html>
  `
  
  return(HEADER + body)
}




