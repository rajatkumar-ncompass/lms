const path = require("path"); // Add this line to import the 'path' module
require("dotenv").config({ path: path.resolve(__dirname, "./config/.env") });
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const authorRoutes = require("./routes/authorRoutes");
const bookDetailsRoutes = require("./routes/bookDetailsRoutes");
const bookRoutes = require("./routes/bookRoutes");
const customerRoutes = require("./routes/customerRoutes");

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/author", authorRoutes);
app.use("/bookdetails", bookDetailsRoutes);
app.use("/books", bookRoutes);
app.use("/customer", customerRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to LMS");
});

app.listen(PORT);
