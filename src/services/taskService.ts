import taskRepository from "../repositories/taskRepository";
import { TaskStatus } from "../types/taskTypes";
import { taskStatus } from "../constants/taskConstants";

class TaskService {
  async createTask(
    projectId: number,
    data: { title: string; description?: string },
  ) {
    if (!data.title) {
      const error = new Error("Title is required");
      (error as any).status = 400;
      throw error;
    }

    return await taskRepository.createTask({
      ...data,
      projectId,
    });
  }

  async getTasksByProject(projectId: number, page: number, limit: number) {
    const offset = (page - 1) * limit;
    return await taskRepository.getTasksByProjectId(projectId, limit, offset);
  }

  async getTaskById(id: number) {
    const task = await taskRepository.getTaskById(id);

    if (!task) {
      const error = new Error("Task not found");
      (error as any).status = 404;
      throw error;
    }

    return task;
  }

  async updateTask(
    id: number,
    data: { title?: string; description?: string; status?: TaskStatus },
  ) {
    const task = await taskRepository.updateTask(id, data);

    if (!task) {
      const error = new Error("Task not found");
      (error as any).status = 404;
      throw error;
    }

    return task;
  }

  async updateTaskStatus(id: number, status: TaskStatus) {
    const allowed = ["todo", "in-progress", "done"];

    if (!taskStatus.includes(status)) {
      const error = new Error("Invalid status");
      (error as any).status = 400;
      throw error;
    }

    const task = await taskRepository.updateTaskStatus(id, status);

    if (!task) {
      const error = new Error("Task not found");
      (error as any).status = 404;
      throw error;
    }

    return task;
  }

  async deleteTask(id: number) {
    const result = await taskRepository.deleteTask(id);

    if (!result) {
      const error = new Error("Task not found");
      (error as any).status = 404;
      throw error;
    }

    return true;
  }
}

export default new TaskService();
