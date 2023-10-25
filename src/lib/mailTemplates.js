const resvKlant = `
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
        width: 80vw;
        height: 70vh;
        margin-top: 10vh;
        text-align: center;
        color: black;
    }

    div > img {
        width: 300px;
    }
</style>

</head>
<body>
    <span>
      <div>
          <p>Wij hebben uw tafelreservatie met onderstaande gegevens goed ontvangen.</p><br>
          <p>Deze reservatie is pas definitief na expliciete bevestiging!</p><br>
          <p>Op maandag en dinsdag is de Viking gesloten en antwoorden we niet op mails</p><br>

          <p><b>Datum: </b>' . $date . '</p>
          <p><b>Naam: </b>' . $voornaam . ' ' . $naam . '</p>
          <p><b>E-mail: </b>' . $email . '</p>
          <p><b>Telefoon: </b>' . $phone . '</p>
          <p><b>Aantal: </b>' . $aantal . '</p>
          <p><b>Aankomst: </b>' . $time . '</p>
          <p><b>Opmerking: </b>' . $opm . '</p>

          <br><a href="./annuleer.php?annulatieid=' . $annulatie_id . '">Klik hier om uw reservering te annuleren.</a>

      </div>
    </span>
</body>
</html>
`;

const resvViking = `
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

</head>
<body>
    <div>
        <p>Er is een nieuwe tafelreservatie</p><br>

        <p><b>Datum: </b>' . $date . '</p>
        <p><b>Naam: </b>' .$voornaam . ' ' . $naam . '</p>
        <p><b>E-mail: </b>' . $email . '</p>
        <p><b>Telefoon: </b>' . $phone . '</p>
        <p><b>Aantal: </b>' . $aantal . '</p>
        <p><b>Aankomst: </b>' . $time . '</p>
        <p><b>Opmerking: </b>' . $opm . '</p>
        
        <br><a href="dashboard.php">Klik hier om te bekijken</a>
    </div>
</body>
</html>
`;

const goedkeuring = `
tis goedgekeurd
`

const annuViking = `
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

</head>
<body>
    <span>
    <div>
        <p>' . $voornaam . '  heeft zijn/haar tafelreservatie geannuleerd</p><br>

        <p><b>Datum: </b>' . $date . '</p>
        <p><b>Naam: </b>' . $voornaam . ' ' . $naam . '</p>
        <p><b>E-mail: </b>' . $email . '</p>
        <p><b>Telefoon: </b>' . $phone . '</p>
        <p><b>Aantal: </b>' . $aantal . '</p>
        <p><b>Aankomst: </b>' . $time . '</p>
        <p><b>Opmerking: </b>' . $opm . '</p>
        
        <br><a href="history.php">Je kan deze nog altijd bekijken in de geschiedenis</a>
    </div>
    </span>
</body>
</html>
`

const annuKlant = `
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

</head>
<body>
    <span>
    <div>
        <p>Beste ' . $voornaam . ',</p><br>
        <p>Uw tafelreservatie voor ' . $date . ' werd succelvol geannuleerd.</p><br>
        <p>Groeten</p>
        <p>Viking team</p>
    </div>
    </span>
</body>
</html>
`

const mailTemplates = {
  resvKlant: {body: resvKlant, title: "Reservering goed ontvangen!"},
  resvViking: {body: resvKlant, title: "Nieuwe reservering!"},
  goedkeuring: {body: goedkeuring, title: "Uw reservering werd goedgekeurd!"},
  annuKlant: {body: annuKlant, title: "Uw reservatie werd geannuleerd!"},
  annuViking: {body: annuViking, title: "heeft zijn reservering geannullerd!"}
};
