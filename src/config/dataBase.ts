import { Sequelize } from "sequelize";

const {DB_NAME, DB_PORT, DB_HOST, DB_USER,DB_PASSWORD}=process.env
if(!DB_HOST||!DB_NAME||!DB_PASSWORD||!DB_USER){
  throw new Error("Missing, required ")
}
const sequelize = new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
  },
);
export default sequelize