require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const authorRoutes = require("./routes/authorRoutes");
const bookDetailsRoutes = require("./routes/bookDetailsRoutes");

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use("/author", authorRoutes);
app.use("/bookdetails", bookDetailsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to LMS");
});

app.listen(PORT);
