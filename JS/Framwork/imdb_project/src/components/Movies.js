import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

// https://api.themoviedb.org/3/trending/movie/day?language=en-US
function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState('');
  // console.log("WatchList == 2", watchList);
  
  // Pagination functions:
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  }
  const onPrev = () => { 
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }
// Watchlist functions:

const watchListhandler = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem('imdb', JSON.stringify(newWatchList));
}

const removeWatchHandler = (movie) => {
  const filterWatchList = watchList.filter((m) => {
    return m.id !== movie.id;
  });
  setWatchList(filterWatchList);
  localStorage.setItem('imdb', JSON.stringify(filterWatchList));
}

const showButton = (id)=> {
  setHovered(id);
}
const hideButton = ()=> {
  setHovered('');
}
  useEffect(() => {
    
    (function () {
      // let oldMoviesFromLS = localStorage.getItem('imdb');
      // setWatchList(JSON.parse(oldMoviesFromLS) || []);
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=d0f309eeda258c4300211f9acdc39321&page=${currentPage}`
        )
        .then((res) => {
          setMovies(res.data.results);
          // console.log(res);
        });
    })();
  }, [currentPage]);
  console.log(watchList);

  return (
    <div>
      <div className="text-xl font-bold mb-4 text-center">Trending Movies</div>
      <div className=" flex space-x-4 flex-wrap ml-4">
        {movies.map((movie, index) => {
          return (
            <div
              onMouseOver={() => showButton(movie.id)}
              onMouseLeave={() => hideButton()}
              key={movie.id}
              className="w-[150px] h-[40vh] bg-center bg-cover rounded-xl mb-10 hover: scale-100 hover:scale-110 transition duration-500  ease-in-out"
              style={{
                backgroundImage:
                  // "url(https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg)",
                  `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              }}
              
            >
              
              <div className="absolute right-0"
                style={{display: hovered === movie.id ? 'block' : 'none'}}
              >
                {
                  watchList.includes(movie) === false ? (
                  <div onClick={() => watchListhandler(movie)}>
                    😊
                  </div>
                  ): (
                    <div onClick={() => removeWatchHandler(movie)}>
                      ❌
                  </div>
                  )
                }
              </div>
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
