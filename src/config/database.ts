import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(); // 添加这一行以读取 .env 文件

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize.addModels([path.join(__dirname, '../models')]);

export default sequelize;
