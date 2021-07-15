import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/getAllMovies`).then((res) => {
      setMovies(res.data);
    });
  }, []);

  const ShowMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="movieList">
          <ul>
            <li>
              <img src={movie.image} alt={movie.title} />
            </li>
            <li>{movie.title}</li>
            <li>
              <Link to={`/movie/${movie._id}`}>See More</Link>
            </li>
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <ShowMovies />
    </div>
  );
}

export default List;
