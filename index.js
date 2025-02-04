require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.render("home");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});