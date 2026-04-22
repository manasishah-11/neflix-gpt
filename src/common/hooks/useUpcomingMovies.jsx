import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setUpcomingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const apiRead = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const apiData = await apiRead.json();

    dispatch(setUpcomingMovies(apiData?.results || []));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
