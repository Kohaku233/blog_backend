const express = require("express");
const mysql = require("mysql");

// 创建 Express 应用
const app = express();
app.use(express.json());

// 配置 MySQL 连接
const db = mysql.createConnection({
  host: "database-1.chw4aiimkpj7.ap-southeast-1.rds.amazonaws.com", // 替换为你的 RDS 实例的终端节点
  user: "admin", // 替换为你的 RDS 用户名
  password: "zzb562496", // 替换为你的 RDS 密码
  database: "blog_db", // 你的数据库名称
});

// 连接到数据库
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database.");
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

