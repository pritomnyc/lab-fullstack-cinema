import React, { useState } from "react";
import axios from "axios";

function NewMovies(props) {
  const [newMovie, setNewMovie] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", newMovie);
    axios.post("http://localhost:5000/newmovie", newMovie).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (e) => {
    let movie = { ...newMovie };
    movie[e.target.placeholder] = e.target.value;
    setNewMovie(movie);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="title" />
        <input onChange={handleChange} type="text" placeholder="director" />
        <input onChange={handleChange} type="text" placeholder="stars" />
        <input onChange={handleChange} type="text" placeholder="description" />
        <input onChange={handleChange} type="text" placeholder="showtimes" />
        <input onChange={handleChange} type="text" placeholder="image" />
        <button>Add movie</button>
      </form>
    </div>
  );
}

export default NewMovies;
