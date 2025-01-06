import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

// https://api.themoviedb.org/3/trending/movie/day?language=en-US
function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  }
  const onPrev = () => { 
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    (function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=d0f309eeda258c4300211f9acdc39321&page=${currentPage}`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res);
        });
    })();
  }, [currentPage]);
  console.log(movies);

  return (
    <div>
      <div className="text-xl font-bold mb-4 text-center">Trending Movies</div>
      <div className=" flex space-x-4 flex-wrap ml-4">
        {movies.map((movie, index) => {
          return (
            <div
              key={movie.id}
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
      <Pagination onNext = {onNext} onPrev = {onPrev} currentPage = {currentPage}/>
    </div>
  );
}

export default Movies;
