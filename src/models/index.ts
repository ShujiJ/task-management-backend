import Project from "./projectModel";
import Task from "./taskModel";

Project.hasMany(Task, { foreignKey: "projectId", as: "tasks" });
Task.belongsTo(Project, {
  foreignKey: "projectId",
  as: "project",
});

export { Project, Task };

