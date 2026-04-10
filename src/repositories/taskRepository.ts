import Task from "../models/taskModel";
import { TaskStatus } from "../types/taskTypes";

class TaskRepository {
  // Create task
  async createTask(data: {
    title: string;
    description?: string;
    status?: TaskStatus;
    // status?: string -- error because string is too broad but here it expects only three;
    projectId: number;
  }) {
    return await Task.create(data);
  }

  // Get tasks by project
  async getTasksByProjectId(projectId: number, limit: number, offset: number) {
    return await Task.findAndCountAll({
      where: { projectId },
      limit,
      offset,
    });
  }

  // Get single task
  async getTaskById(id: number) {
    return await Task.findByPk(id);
  }

  // Update full task
  async updateTask(
    id: number,
    data: { title?: string; description?: string; status?: TaskStatus },
  ) {
    const task = await Task.findByPk(id);
    if (!task) return null;

    return await task.update(data);
  }

  // Update only status (kanban)
  async updateTaskStatus(id: number, status: string) {
    const task = await Task.findByPk(id);
    if (!task) return null;

    task.status = status as any;
    return await task.save();
  }

  // Delete task
  async deleteTask(id: number) {
    const task = await Task.findByPk(id);
    if (!task) return null;

    await task.destroy();
    return true;
  }
}

export default new TaskRepository();
