import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(``).then((res) => {
      setMovies(res.data);
    });
  }, []);

  function ShowAllMovies() {
    // return movies.map();
  }

  return (
    <div>
      <h1>Ironhack Cinema</h1>
      <h3>Click on the movie to check the showtimes!</h3>
      {ShowAllMovies()}
    </div>
  );
}

export default List;
