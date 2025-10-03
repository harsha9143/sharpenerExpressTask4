const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.get("/products", (req, res, next) => {
  res.send("<h1>Here is the list of all products</h1>");
});

app.post("/products", (req, res, next) => {
  res.send("<h1>A new product has been added</h1>");
});

app.get("/categories", (req, res, next) => {
  res.send("<h1>Here is the list of all categories</h1>");
});

app.post("/categories", (req, res, next) => {
  res.send("<h1>A new category has been created</h1>");
});

app.use(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page not Found</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`connection eshtablished successfully http:localhost:${PORT}`);
});
