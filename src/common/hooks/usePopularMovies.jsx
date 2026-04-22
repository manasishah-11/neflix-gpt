import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const apiRead = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const apiData = await apiRead.json();

    dispatch(setPopularMovies(apiData?.results || []));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
