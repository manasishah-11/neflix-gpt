import { useQuery } from "@tanstack/react-query";
import { API_OPTIONS } from "../utils/constants";

const useSearchMoviesByTitle = (titles) => {
  return useQuery({
    queryKey: ["search-movies", titles.join(",")],
    queryFn: async ({ queryKey }) => {
      const [, movieTitlesQuery] = queryKey;
      const movieTitles = movieTitlesQuery.split(",");

      if (!movieTitles || movieTitles.length === 0) return [];

      const moviesApiData = await Promise.all(
        movieTitles.filter(Boolean).map((title) =>
          fetch(
            `https://api.themoviedb.org/3/search/movie?query=${title}&page=1`,
            API_OPTIONS,
          )
            .then((res) => res.json())
            .then((apiData) =>
              apiData?.results?.length > 0 ? apiData.results : [],
            ),
        ),
      );

      return moviesApiData.flat().filter(Boolean);
    },
    enabled: Array.isArray(titles) && titles.length > 0,
  });
};

export default useSearchMoviesByTitle;
