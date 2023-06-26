const mysql = require("mysql");

// untuk konfigurasi koneksi
const koneksi = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // host: "localhost",
  // user: "root",
  // password: "pw_db",
  // database: "db_tb",
  // multipleStatements: true,
});

// koneksi database
koneksi.connect((err) => {
  if (err) throw err;
  console.log("SERVER SEDANG BERJALAN.....");
  console.log("localhost:3000");
});

module.exports = koneksi;
