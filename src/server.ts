import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import sequelize from "./config/dataBase";


const port = process.env.port || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log(`Database connected successfully`);
    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  } catch (error) {
    console.log(`Database connection failed`);
  }
}
startServer();
