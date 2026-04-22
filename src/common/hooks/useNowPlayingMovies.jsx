import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const apiRead = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const apiData = await apiRead.json();

    dispatch(setNowPlayingMovies(apiData?.results || []));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
