import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

function useGetMovieTrailer(movie_id) {
  const [trailerDetails, setTrailerDetails] = useState("");

  const fetchMovieVideos = async () => {
    const rawData = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      API_OPTIONS,
    );
    const videosJSON = await rawData.json();
    const videos = videosJSON?.results;
    setTrailerDetails(
      videos?.find((vid) => vid.type === "Trailer") ?? videos[0],
    );
  };

  useEffect(() => {
    if (!movie_id) return;
    fetchMovieVideos();
  }, [movie_id]);

  return trailerDetails;
}

export default useGetMovieTrailer;
