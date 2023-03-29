const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const swaggerUi = require("swagger-ui-express");
const swaggerJsdocs = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const swaggerData = require("./docs/swagger");

const postRoutes = require("./routes/farm");
const Product = require("./routes/product");
const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/image");

const port = process.env.PORT || 4000;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdocs(swaggerData))
);
app.use(bodyParser.json());
app.use("/post", postRoutes);
app.use("/product", Product);
app.use("/signup", userRoutes);
app.use("/upload", imageRoutes);

app.listen(port, () => { 
  console.log(`Example of the server is in port ${port}`);
});
