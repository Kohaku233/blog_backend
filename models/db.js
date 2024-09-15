const mysql = require("mysql");

// 配置 MySQL 连接
const db = mysql.createConnection({
  host: "database-1.chw4aiimkpj7.ap-southeast-1.rds.amazonaws.com", // 替换为你的 RDS 实例的终端节点
  user: "admin", // 替换为你的 RDS 用户名
  password: "zzb562496", // 替换为你的 RDS 密码
  database: "blog_db", // 你的数据库名称
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
