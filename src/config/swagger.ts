import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API",
      version: "1.0.0",
      description: "API documentation for Task Management System",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  //   apis: ["./src/routes/*.ts"],-  where your API routes are
  apis: ["./src/docs/*.ts"], //both task and project
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
