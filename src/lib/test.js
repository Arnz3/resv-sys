const datum = "2023-11-21T23:00:00.000Z";
const tijd = "22:22:00";

let date = new Date(datum);
let options_date = { year: "numeric", month:"short", day:"2-digit" };
let date_string = date.toLocaleDateString("nl-BE", options_date);
let time_string = tijd.substring(0,5);

console.log(date_string);
console.log(time_string);