const express = require("express");
const app = express();
const blogRoutes = require("./routes/blogRoutes");

// 使用中间件
app.use(express.json());

// 使用博客路由
app.use("/api", blogRoutes);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
