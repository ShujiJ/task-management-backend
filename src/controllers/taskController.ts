import { Request, Response, NextFunction } from "express";
import taskService from "../services/taskService";
import { successResponse } from "../utils/response";

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { projectId } = req.params;
    const task = await taskService.createTask(Number(projectId), req.body);

    successResponse(res, task, "Task created successfully");
  } catch (error) {
    next(error);
  }
};

export const getTasksByProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { projectId } = req.params;
    const { page = "1", limit = "5" } = req.query;

    const tasks = await taskService.getTasksByProject(
      Number(projectId),
      Number(page),
      Number(limit),
    );
    const { count, rows } = tasks;

    successResponse(res, {
      total: count,
      page,
      limit,
      data: rows,
    });
    // successResponse(res, tasks, "Tasks fetched successfully");
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await taskService.getTaskById(Number(req.params.id));
    successResponse(res, task, "Task fetched successfully");
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await taskService.updateTask(Number(req.params.id), req.body);
    successResponse(res, task, "Task updated successfully");
  } catch (error) {
    next(error);
  }
};

export const updateTaskStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await taskService.updateTaskStatus(
      Number(req.params.id),
      req.body.status,
    );
    successResponse(res, task, "Task status updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await taskService.deleteTask(Number(req.params.id));
    successResponse(res, null, "Task deleted successfully");
  } catch (error) {
    next(error);
  }
};
