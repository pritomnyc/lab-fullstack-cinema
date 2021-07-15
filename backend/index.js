const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Movie = require("./models/Movie");
const data = require("./bin/seeds");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost:27017/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (self) => {
    await Movie.deleteMany();
    await Movie.insertMany(data);
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 5000);
