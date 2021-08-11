import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Details(props) {
  const [movie, setMovie] = useState({});

  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:5000/movieDetails/${props.match.params.dynamicId}`
    );
    setMovie(res.data);
  }, [props.match.params.dynamicId]);

  return (
    <div>
      <img src={movie.image} />
      <h2>{movie.title}</h2>
      <h3>Director: {movie.director}</h3>
      <ul>
        <h4>Stars</h4>
        {movie.stars
          ? movie.stars.map((star, i) => {
              return <li key={i}>{star}</li>;
            })
          : null}
      </ul>
      {movie.description}
      <br />
      {movie.showtimes &&
        movie.showtimes.map((times) => {
          return <>{times} | </>;
        })}
    </div>
  );
}

export default Details;
