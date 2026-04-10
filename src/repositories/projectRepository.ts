import Project from "../models/projectModel";
import { Task } from "../models";

class ProjectRepository {
  async createProject(data: { name: string }) {
    const project = await Project.create(data);
    return project;
  }
  async getAllProjects() {
    const project = await Project.findAll();
    return project;
  }
  async getProjectByID(id: number) {
    const project = await Project.findByPk(id, {
      include: [
        {
          model: Task,
          as: "tasks",
        },
      ],
    });
    return project;
  }
  async updateProject(id: number, data: { name: string }) {
    const project = await Project.findByPk(id);
    if (!project) {
      return null;
    }
    return await project.update(data);
  }
  async deleteProject(id: number) {
    const project = await Project.findByPk(id);
    if (!project) {
      return null;
    }
    await project.destroy();
    return true;
  }
}

export default new ProjectRepository();
