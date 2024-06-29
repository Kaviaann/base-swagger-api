// * Import
const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const swagger = require("swagger-ui-express");
const apiRouter = require(path.resolve("router/api.js"));
const { swaggerJSON, swaggerOptions } = require("./swagger");
const { Payload } = require(path.resolve("utils/api.js"));

// * Variable
const app = express();
const PORT = 3000;

// * Middleware
app.use(express.json());
app.use(cors());
app.set("view engine", ejs.render);
app.use(
  "/src",
  cors({
    origin: "127.0.0.1",
  }),
  express.static(path.resolve("src"))
);
app.use("/endpoint", swagger.serve, swagger.setup(swaggerJSON, swaggerOptions));

// * REST
app.get("/", (req, res) => {
  res.status(200).render("index.ejs", { owner: "Kaviaann" });
});

// * ROUTER
app.use("/api", apiRouter);

// * HANDLER
app.get("*", (req, res) => {
  res.status(404).json(new Payload(404, "Invalid endpoint"));
});

// * LISTEN
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app