import React, { useRef, useState } from "react";
import Header from "../../common/components/Header";
import { recommendationPromptResponse } from "../../common/utils/openai";
import useSearchMoviesByTitle from "../../common/hooks/useSearchMoviesByTitle";
import MovieCard from "../../common/components/MovieCard";

function Search() {
  const searchTextRef = useRef(null);
  const [movieTitles, setMovieTitles] = useState([]);

  const movies = useSearchMoviesByTitle(movieTitles);

  async function handleGptSearch(e) {
    e.preventDefault();
    if (!!searchTextRef?.current && !!searchTextRef.current?.value) {
      const movieTitlesFromOpenAi = await recommendationPromptResponse(
        searchTextRef.current.value,
      );
      setMovieTitles(movieTitlesFromOpenAi.split(", "));
    } else {
      console.log("HERE");
    }
  }

  return (
    <div className="relative bg-black min-h-screen">
      <div className="absolute z-10">
        <Header />
      </div>
      <div className="pt-20 flex justify-center">
        <div className="w-full sm:w-1/2">
          <form onSubmit={handleGptSearch} className="px-4 sm:px-0">
            <div className="flex gap-2 items-center">
              <div className="flex-1">
                <input
                  ref={searchTextRef}
                  className="w-full bg-white rounded-md outline-none px-2.5 py-2 text-sm"
                  placeholder="What would you like to watch today?"
                />
              </div>
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-600 focus:border-2 focus:border-white text-white rounded-md text-xs font-semibold px-3 py-2.5 transition-colors duration-200 outline-none"
              >
                Recommend
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center pt-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-max">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
