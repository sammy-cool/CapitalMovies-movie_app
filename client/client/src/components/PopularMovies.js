import React from "react";
import requests from "../requests";
import Discover from "./Discover";

function PopularMovies() {
  return (
    <div>
      <Discover title="Popular Movies" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default PopularMovies;
