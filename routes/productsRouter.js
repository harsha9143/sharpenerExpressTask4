const express = require("express");

const product = express.Router();

product.get("/", (req, res, next) => {
  console.log(`${req.method.toUpperCase()} request made to ${req.url}`);
  res.send("<h1>Here is the list of all products</h1>");
});

product.post("/", (req, res, next) => {
  console.log(`${req.method.toUpperCase()} request made to ${req.url}`);
  res.send("<h1>A new product has been added</h1>");
});

module.exports = product;
