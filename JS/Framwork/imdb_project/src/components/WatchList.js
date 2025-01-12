import React, { useEffect, useState } from "react";

function WatchList() {
  // 20250108233808
  // https://api.themoviedb.org/3/movie/550?api_key=d0f309eeda258c4300211f9acdc39321
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");

  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thrillers",
    10752: "War",
    37: "Western",
  };

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("imdb");
    if (moviesFromLocalStorage) {
      setFavorites(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    let temp = favorites.map((movie) => genreids[movie.genre_ids[0]]);
    temp = new Set(temp);
    setGenres(["All Genres", ...temp]);
  }, [favorites]);

  let filterArray = [];
  filterArray =
    currGenre === "All Genres"
      ? favorites
      : favorites.filter((movie) => genreids[movie.genre_ids[0]] === currGenre);
  // genre filter

  // Soring wrt Rating:
  if (rating === 1) {
    filterArray.sort((a, b) => a.vote_average - b.vote_average);
  } else if (rating === -1) {
    filterArray.sort((a, b) => b.vote_average - a.vote_average);
  }

  filterArray = filterArray.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  // Delete Movie:
  const handleDeleteMovie = (movie) => {
    let newArr = favorites.filter((m) => {
      return m.id !== movie.id;
    });
    setFavorites(newArr);
    localStorage.setItem("imdb", JSON.stringify(newArr));
  };


  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre, index) => {
          return (
            <button
              key={index}
              className={
                currGenre === genre
                  ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                  : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
              }
              onClick={() => {
                setCurrGenre(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <input
          className="border-4 p-1 m-2 bg-gray-200 rounded-md"
          type="text"
          placeholder="Search ur movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-hideen rounded-lg border border-gray-300 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left txt-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setRating(1);
                    }}
                  >
                    <path d="M12 16.5v-9M8.5 11 12 7.5l3.5 3.5" />
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
                  </svg>

                  <div>Rating</div>

                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setRating(-1)}
                  >
                    <path d="M12 7.5v9m3.5-3.5L12 16.5 8.5 13" />
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
                  </svg>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>genres</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filterArray.map((movie, index) => {
              return (
                <tr className="hover:bg-gray-50" key={index}>
                  <td className="flex item-center px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[6rem] w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="poster"
                    />

                    <div className="font-medium text-gray-700 text-sm pl-4">
                      {movie.title}
                    </div>
                  </td>

                  <td className="pl-8 py-4">{movie.vote_average}</td>

                  <td className="pl-5 py-4">{movie.popularity}</td>

                  <td className="pl-2 py-4">{genreids[movie.genre_ids[0]]}</td>

                  <td>
                    <button
                      onClick={() => handleDeleteMovie(movie)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
