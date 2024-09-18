require("dotenv").config();
const mysql = require("mysql");

// 配置 MySQL 连接
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 连接到数据库
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
  console.log("Connected to MySQL Database.");
});

module.exports = db;
