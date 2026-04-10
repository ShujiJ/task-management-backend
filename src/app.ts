import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes"
import errorMiddleware from "./middlewares/errorMiddleware";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/projects",projectRoutes)
app.use("/", taskRoutes);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("API is running");
});
export default app;
