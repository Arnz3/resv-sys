let mysql = require("mysql2");

let con = mysql.createConnection(
  {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
);

export default async function executeQuery(query) {
  const result = await con.promise().query(query);
  return result[0];
}
