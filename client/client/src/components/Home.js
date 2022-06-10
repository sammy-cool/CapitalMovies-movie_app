import React from "react";
import requests from "../requests";
import Discover from "./Discover";

function Home() {
  return (
    <div>
      <Discover
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Discover title="Trending" fetchUrl={requests.fetchTrending} />
      <Discover title="Up Coming" fetchUrl={requests.fetchUpcoming} />
      <Discover title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Discover title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default Home;
