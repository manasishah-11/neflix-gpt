import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useSearchMoviesByTitle = (titles) => {
  const [movies, setMovies] = useState([]);

  const getSearchMoviesByTitle = async () => {
    const moviesApiData = await Promise.all(
      titles.map((title) =>
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${title}&page=1`,
          API_OPTIONS,
        )
          .then((res) => res.json())
          .then((apiData) => {
            return !!apiData && apiData?.results?.length > 0
              ? apiData?.results
              : null;
          }),
      ),
    );
    setMovies(moviesApiData.flat());
  };

  useEffect(() => {
    if (!titles || titles.length === 0) return;
    getSearchMoviesByTitle();
  }, [titles]);

  return movies;
};

export default useSearchMoviesByTitle;
