const { default: sendVikingMail } = require("./mail");
const { default:  mailNrViking } = require("./mailTemplates");

sendVikingMail("cuyversarno@gmail.com", {title: "test", body: mailNrViking({
  voornaam: "Arno",
  naam: "Cuvyers",
  datum: "9/11/2001",
  email: "cuyversarno@gmail.com",
  phone: "0468348434",
  aantal: "4",
  time: "08:00",
  opm: "dit is een test!"
})});