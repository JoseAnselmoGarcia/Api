const mysql = require("mysql2");

//console.log(process.env.DB_PORT);
//console.log(process.env.DB_HOST);
//console.log(process.env.DB_USER);
//console.log(process.env.DB_PASS);

const db = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

module.exports = db;
