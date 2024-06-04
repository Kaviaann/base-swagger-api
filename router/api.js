const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const users = JSON.parse(fs.readFileSync(path.resolve("db/users.json")));
const { Payload } = require(path.resolve("utils/api.js"));

router.get("/", (req, res) => {
  res.redirect("/endpoint");
});

router.get("/users", (req, res) => {
  res.status(200).json(new Payload(200, users));
});

router.get("/users/:userID", (req, res) => {
  if (!req.params || !req.params.userID)
    return res.status(400).json(new Payload(400, "Add UserID To The Path!"));
  const { userID } = req.params;
  const user = new Payload(
    200,
    users.find((v) => v.id == userID)
  );
  if (!user.data)
    return res.status(404).json(new Payload(404, "User Not Found."));
  res.status(200).json(user);
});

module.exports = router;
