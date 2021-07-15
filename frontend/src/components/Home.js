import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(props) {
  return (
    <div>
      <div>
        <h1>Cinema Ironhack</h1>
      </div>
      <Link to="/movies">
        <button>Check the movies!</button>
      </Link>
    </div>
  );
}

export default Home;
