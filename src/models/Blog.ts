import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'blogs'
})
export class Blog extends Model<Blog> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  content!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  views!: number;
}
