import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setTopRatedMovies } from "../store/moviesSlice";
import { useQuery } from "@tanstack/react-query";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const apiRead = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const apiData = await apiRead.json();

    dispatch(setTopRatedMovies(apiData?.results || []));
    return apiData?.results || [];
  };

  return useQuery({
    queryKey: ["top-rated-movies"],
    queryFn: getTopRatedMovies,
    enabled: !topRatedMovies || topRatedMovies.length === 0,
  });
};

export default useTopRatedMovies;
