const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mahim:mahim@cluster0.r3bte.mongodb.net/mymovies?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const express = require("express");
const app = express();
const movies = require("./models/Movie");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const Movie = require("./models/Movie");
app.use(bodyParser.json());
app.use(cors());

app.get("/listOfMovies", (req, res) => {
  Movie.find().then((movies) => {
    res.json(movies);
  });
});

app.get("/movieDetails/:dynamicId", (req, res) => {
  console.log(req.params);
  Movie.findOne({ _id: req.params.dynamicId }).then((movies) => {
    res.json(movies);
  });
});

app.post("/newmovie", (req, res) => {
  console.log("newmovie", req.body);
  Movie.create(req.body).then((movies) => {
    res.json(movies);
  });
});

app.listen(5000);

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const Movie = require("./models/Movie");
// const data = require("./bin/seeds");
// const bodyParser = require("body-parser");

// mongoose
//   .connect("mongodb://localhost:27017/movies", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async (self) => {
//     await Movie.deleteMany();
//     await Movie.insertMany(data);
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use("/", require("./routes")); //order matters
// app.listen(process.env.PORT || 5000);
