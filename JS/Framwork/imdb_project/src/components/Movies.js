import React, { useEffect, useState } from "react";
import axios from "axios";

// https://api.themoviedb.org/3/trending/movie/day?language=en-US
function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=d0f309eeda258c4300211f9acdc39321"
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    })();
  }, []);
  console.log(movies);

  return (
    <div>
      <div className="text-xl font-bold mb-4 text-center">Trending Movies</div>
      <div className=" flex space-x-4 flex-wrap ml-4">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="w-[150px] h-[40vh] bg-center bg-cover rounded-xl mb-10 hover: scale-100 hover:scale-110 transition duration-500  ease-in-out"
              style={{
                backgroundImage:
                  // "url(https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg)",
                  `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div className="text-white center text-center font-bold bg-black bg-opacity-50 size-small">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
