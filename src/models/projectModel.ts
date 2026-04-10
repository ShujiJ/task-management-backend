import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/dataBase";

interface projectAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updateAT?: Date;
}

interface projectCreationAttributes extends Optional<projectAttributes, "id"> {}

class Project
  extends Model<projectAttributes, projectCreationAttributes>
  implements projectAttributes
{
  public id!: number;
  public name!: string;
  public readonly createdAt?: Date;
  public readonly updateAT?: Date;
}
Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Project", tableName: "Projects", timestamps: true },
);

export default Project