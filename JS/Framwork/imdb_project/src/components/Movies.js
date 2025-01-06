import React from "react";
import axios from "axios";

function Movies() {

  // axios.get('https://api.themoviedb.org/3/movie/550?api_key=d0f309eeda258c4300211f9acdc39321').then((res)=>{
  //   console.log(res.data);
  // })
  axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=d0f309eeda258c4300211f9acdc39321').then((res)=>{
    console.log(res.data.results);
  })
  // https://api.themoviedb.org/3/trending/movie/day?language=en-US

  return (
    <div>
      <div className="text-xl font-bold mb-4 text-center">Trending Movies</div>
      <div className=" flex space-x-4">
        <div
          className="w-[150px] h-[40vh] bg-center bg-cover rounded-xl mb-10 hover: scale-100 hover:scale-110 transition duration-500  ease-in-out"
          style={{
            backgroundImage:
              "url(https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg)",
          }}
        >
          <div className="text-white center text-center font-bold bg-black bg-opacity-50 size-small">
            Jhon winck
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
