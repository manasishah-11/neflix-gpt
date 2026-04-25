import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  const getNowPlayingMovies = async () => {
    const apiRead = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const apiData = await apiRead.json();

    dispatch(setNowPlayingMovies(apiData?.results || []));
  };

  useEffect(() => {
    if (!!nowPlayingMovies && nowPlayingMovies.length > 0) return;
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
