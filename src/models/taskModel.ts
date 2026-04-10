import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/dataBase";
import { TaskStatus } from "../types/taskTypes";

interface TaskAttributes {
  id: number;
  title: string;
  description?: string;
  status: "todo" | "in-progress" | "done";
  projectId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TaskCreationAttributes extends Optional<
  TaskAttributes,
  "id" | "description" | "status"
> {}

class Task
  extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes
{
  public id!: number;
  public title!: string;
  public description?: string;
  public status!: TaskStatus;
  public projectId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      //   allowNull:false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "todo",
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "Tasks",
    timestamps: true,
  },
);

export default Task;
