const swaggerData = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      version: "1.0.0",
      title: "Agro farm api",
      description: "It keeps track all of farm Records",
      servers: ["http://localhost:3000"],
    },
    components: {
      securitySchemes: {
        jwt: {
          type: "http" || "https",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["routes/*.js"],
};

module.exports = swaggerData;
