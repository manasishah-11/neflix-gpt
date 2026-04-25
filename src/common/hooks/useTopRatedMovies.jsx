import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setTopRatedMovies } from "../store/moviesSlice";
import { useEffect } from "react";

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
  };

  useEffect(() => {
    if (!!topRatedMovies && topRatedMovies.length > 0) return;
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
