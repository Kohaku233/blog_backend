import express from "express";
import cors from "cors";
import sequelize from './config/database';
import blogRoutes from "./routes/blogRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", blogRoutes);

const PORT = process.env.PORT || 2333;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`服务器正在端口 ${PORT} 上运行`);
  });
}).catch(err => {
  console.error('数据库连接失败:', err);
});
