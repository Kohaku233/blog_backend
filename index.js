const express = require("express");
const cors = require("cors");
const app = express();
const blogRoutes = require("./routes/blogRoutes");

// 使用中间件
app.use(cors()); // 添加这行
app.use(express.json());

// 使用博客路由
app.use("/api", blogRoutes);

// 启动服务器
const PORT = process.env.PORT || 2333;
app.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
});
