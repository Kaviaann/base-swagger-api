// ? Add swagger infos
const info = {
  title: "Base Swagger + API",
  description:
    "Made with love by : [@Kaviaann](https://github.com/kaviaann/base-swagger-api)",
  termsOfService: "https://swagger.io/terms",
  contact: {
    email: "ludwigyelstein@gamil.com",
  },
  license: {
    name: "MIT",
    url: "https://opensource.org/license/mit",
  },
};

// ? Make servers
const servers = [
  {
    url: "/api",
    description: "Server 1",
  },
];

// ? Tags
const tags = [
  {
    name: "Database",
    description: "API to access database",
  },
];

// ? Declare path
const paths = {};

// ? Add more path
paths["/users"] = {
  get: {
    tags: ["Database"],
    summary: "Get list of users",
    description: "Get all list of the users registered in the database",
    produces: ["application/json"],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 200,
                ok: true,
                datas: [
                  {
                    name: "Kaviaann",
                    age: 14,
                    id: 1,
                  },
                  {
                    name: "Kiicode",
                    age: null,
                    id: 2,
                  },
                  {
                    name: "Kizh",
                    age: 69,
                    id: 3,
                  },
                ],
              },
            },
          },
        },
      },
      500: {
        description: "SERVER PROBLEM",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 500,
                ok: false,
                datas:
                  "There's something wrong with the server/database, try again later",
              },
            },
          },
        },
      },
    },
  },
};

paths["/users/{userID}"] = {
  get: {
    tags: ["Database"],
    summary: "Get list of users",
    description: "Get all list of the users registered in the database",
    produces: ["application/json"],
    parameters: [
      {
        name: "userID",
        in: "path",
        required: true,
        description: "Id to get the given user by id",
        schema: {
          type: "string",
        },
        example: "1",
      },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 200,
                ok: true,
                datas: {
                  name: "Kaviaann",
                  age: 14,
                  id: 1,
                },
              },
            },
          },
        },
      },
      500: {
        description: "SERVER PROBLEM",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                status: 500,
                ok: false,
                datas:
                  "There's something wrong with the server/database, try again later",
              },
            },
          },
        },
      },
    },
  },
};

// ? ======================================================================

// ? The JSON
exports.swaggerJSON = {
  openapi: "3.0.0",
  info,
  host: "http://localhost:",
  servers,
  tags,
  paths,
};

// ? Custom css, js, and support vercel
exports.swaggerOptions = {
  customJs: [
    "/src/js/endpoint.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.min.js",
  ],
  customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.css",
  ],
  customCss: ".topbar {display : none} h2.title {cursor:pointer}",
  customSiteTitle: "Base Swagger API | Endpoint",
  customfavIcon: "https://avatars.githubusercontent.com/u/138269134?v=4",
};
