const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
        version: "1.0.0",
        description: "API documentation for the project",
        contact: {
          name: "Your Name",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server"
            }
        ]
    },
  },
  apis: ["./src/routes/*.js"]
};

export default swaggerJSDoc(options);