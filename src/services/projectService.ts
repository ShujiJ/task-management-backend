import projectRepository from "../repositories/projectRepository";

class ProjectService {
  async createProjectService(name: string) {
    if (!name) {
      throw new Error("Project name is required");
    }
    return await projectRepository.createProject({ name });
  }

  async getAllProjectsService() {
    return await projectRepository.getAllProjects();
  }
  async getProjectByIdService(id: number) {
  const project = await projectRepository.getProjectByID(id);

  if (!project) {
    const error = new Error("Project not found");
    (error as any).status = 404;
    throw error;
  }

  return project;
}

  async updateProjectService(id: number, name: string) {
    const project = await projectRepository.updateProject(id, { name });
    if (!project) {
      throw new Error("Project not found");
    }
    return project;
  }
  async deleteProjectService(id: number) {
    const project = await projectRepository.deleteProject(id);
    if (!project) {
      throw new Error("Project not found");
    }
    return true;
  }
}

export default new ProjectService();
