const { Schema, model } = require("mongoose");
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  descriptions: String,
  showtimes: [String],
});

module.exports = model("Movie", movieSchema);
