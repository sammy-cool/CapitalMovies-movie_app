import React from "react";
import requests from "../requests";
import Discover from "./Discover";

function LatestMovies() {
  return (
    <div className="title">
      <Discover title="Latest Movies" fetchUrl={requests.fetchLatest} />
    </div>
  );
}

export default LatestMovies;
