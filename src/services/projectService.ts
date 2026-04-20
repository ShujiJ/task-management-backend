import projectRepository from "../repositories/projectRepository";

class ProjectService {
  async createProjectService(name: string) {
    if (!name) {
      const error = new Error("Project name is required");
      (error as any).status = 400;//bad request - missing field so 400
      throw error;
    }
    return await projectRepository.createProject({ name });
  }

  async getAllProjectsService() {
    return await projectRepository.getAllProjects();
  }

  async getProjectByIdService(id: number) {
    const project = await projectRepository.getProjectByID(id);

    if (!project) {
      // const error = new Error("Project not found");
      const error = new Error("Project not found");
      (error as any).status = 404;//resource not found
      throw error;
   
    }

    return project;
  }

  async updateProjectService(id: number, name: string) {
    const project = await projectRepository.updateProject(id, { name });
    if (!project) {
      // throw new Error("Project not found");
      const error = new Error("Project not found");
      (error as any).status = 404;
      throw error;
    }
    return project;
  }
  async deleteProjectService(id: number) {
    const project = await projectRepository.deleteProject(id);
    if (!project) {
      const error = new Error("Project not found");
      (error as any).status = 404;
      throw error;
    }
    return true;
  }
}

export default new ProjectService();
