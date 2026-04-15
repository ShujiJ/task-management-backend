import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import errorMiddleware from "./middlewares/errorMiddleware";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/projects", projectRoutes);
app.use("/", taskRoutes);
app.use(errorMiddleware);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("API is running");
});
export default app;
