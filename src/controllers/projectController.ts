import { Request, Response } from "express";
import projectService from "../services/projectService";
import { successResponse } from "../utils/response";

//create
export const createProjectController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const { name } = req.body;
    const project = await projectService.createProjectService(name);
    successResponse(res, project, "Project created successfully");
  } catch (error) {
    next(error);
  }
};

//get all
export const getAllProjectsController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const project = await projectService.getAllProjectsService();
    successResponse(res, project, "Projects fetched successfully");
  } catch (error) {
    next(error);
  }
};

// get one project
export const getProjectByIdController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const { id } = req.params;
    const project = await projectService.getProjectByIdService(Number(id));
    successResponse(res, project, "Project fetched successfully");
  } catch (error) {
    next(error);
  }
};

//update
export const updateProjectController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const project = await projectService.updateProjectService(Number(id), name);
    successResponse(res, project, "Project updated successfully");
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteProjectController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const { id } = req.params;

    await projectService.deleteProjectService(Number(id));
    successResponse(res, null, "Project deleted successfully");
  } catch (error) {
    next(error);
  }
};
