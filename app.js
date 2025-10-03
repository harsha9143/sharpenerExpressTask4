const express = require("express");

const app = express();

const product = require("./routes/productsRouter");
const category = require("./routes/categoryRouter");

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use("/products", product);
app.use("/category", category);

app.use(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page not Found</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`connection eshtablished successfully http:localhost:${PORT}`);
});
