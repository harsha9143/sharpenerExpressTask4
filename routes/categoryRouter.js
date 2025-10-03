const express = require("express");

const category = express.Router();

category.get("/", (req, res, next) => {
  console.log(`${req.method.toUpperCase()} request made to ${req.url}`);
  res.send("<h1>Here is the list of all categories</h1>");
});

category.post("/", (req, res, next) => {
  console.log(`${req.method.toUpperCase()} request made to ${req.url}`);
  res.send("<h1>A new category has been created</h1>");
});

module.exports = category;
