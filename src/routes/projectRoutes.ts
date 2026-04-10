import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import { projectSchema } from "../validators/projectValidator";
import {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/projectController";

const router = Router();

router.post("/", validate(projectSchema), createProjectController);
router.get("/", getAllProjectsController);
router.get("/:id", getProjectByIdController);
router.put("/:id", validate(projectSchema), updateProjectController);
router.delete("/:id", deleteProjectController);

export default router;
