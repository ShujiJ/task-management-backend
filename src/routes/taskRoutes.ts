import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import {
  createTaskSchema,
  updateTaskSchema,
  statusSchema,
} from "../validators/taskValidator";

import {
  createTask,
  getTasksByProject,
  getTaskById,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from "../controllers/taskController";

const router = Router();

// Nested routes
router.post(
  "/projects/:projectId/tasks",
  validate(createTaskSchema),
  createTask,
);
router.get("/projects/:projectId/tasks", getTasksByProject);

// Task routes
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", validate(updateTaskSchema), updateTask);
router.patch("/tasks/:id/status", validate(statusSchema), updateTaskStatus);
router.delete("/tasks/:id", deleteTask);

export default router;
