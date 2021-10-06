import React from "react";
import requests from "../requests";
import Dashboard from "./Discover";

function FavMovies() {
  return (
    <div className="title">
      <Dashboard title="Favourite Movies" fetchUrl={requests.fetchMovies} />
      <Dashboard title="Movies Genres" fetchUrl={requests.fetchGenres} />
    </div>
  );
}

export default FavMovies;
