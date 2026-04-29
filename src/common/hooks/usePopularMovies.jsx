import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setPopularMovies } from "../store/moviesSlice";
import { useQuery } from "@tanstack/react-query";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const apiRead = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const apiData = await apiRead.json();

    dispatch(setPopularMovies(apiData?.results || []));
    return apiData?.results || [];
  };

  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: getPopularMovies,
    enabled: !popularMovies || popularMovies.length === 0,
  });
};

export default usePopularMovies;
