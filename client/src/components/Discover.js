import React, { useEffect, useState } from "react";

import instance from "../axios";
import "./Discover.css";

const base_url = "https://image.tmdb.org/t/p/w500";

function Discover({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movies) => {
    alert(movies?.overview);
  };

  return (
    <div className="newrow">
      <div className="row">
        <h2 className="rowtitle">{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__largePoster"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
