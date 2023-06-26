const mysql = require("mysql");

// untuk konfigurasi koneksi
const createDocuments = (req, res) => {
  // Menyimpan data dari request body ke variabel data
  const data = { ...req.body };
  // Query SQL untuk insert data
  const insertSql = "INSERT INTO documents SET ?";
  // Query SQL untuk mendapatkan last inserted ID
  const selectSql = "SELECT LAST_INSERT_ID() as id";

  // Menjalankan query untuk melakukan INSERT
  koneksi.query(insertSql, data, (err, result) => {
    // Error handling
    if (err) {
      return res.status(500).json({ success: false, message: "Gagal Membuat Form!", error: err });
    }

    // Menjalankan query untuk mendapatkan last inserted ID
    koneksi.query(selectSql, (err, results) => {
      // Error handling
      if (err) {
        return res.status(500).json({ success: false, message: "Gagal Membuat Form!", error: err });
      }

      // Mendapatkan ID yang baru saja di-generate
      const id = results[0].id;

      // Jika request berhasil
      res
        .status(201)
        .json({ success: true, message: "Berhasil Membuat Form!", data: { ...req.body, id } });
    });
  });
};

// const koneksi = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DBNAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   // host: "localhost",
//   // user: "root",
//   // password: "pw_db",
//   // database: "db_tb",
//   multipleStatements: true,
// });

// koneksi database
koneksi.connect((err) => {
  if (err) throw err;
  console.log("SERVER SEDANG BERJALAN.....");
  console.log("localhost:3000");
});

module.exports = koneksi;
