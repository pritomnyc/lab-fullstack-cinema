import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      this is the home page
      <Link to="/movies">
        <button>Check out these movies!</button>
      </Link>
    </div>
  );
}

export default Home;
