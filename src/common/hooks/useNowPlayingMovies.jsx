import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setNowPlayingMovies } from "../store/moviesSlice";
import { useQuery } from "@tanstack/react-query";

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
    return apiData?.results || [];
  };

  return useQuery({
    queryKey: ["now-playing-movies"],
    queryFn: getNowPlayingMovies,
    enabled: !nowPlayingMovies || nowPlayingMovies.length === 0,
  });
};

export default useNowPlayingMovies;
