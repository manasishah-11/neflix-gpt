import { API_OPTIONS } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";

function useGetMovieTrailer(movie_id) {
  const fetchMovieVideos = async () => {
    if (!movie_id) return null;
    const rawData = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      API_OPTIONS,
    );
    const videosJSON = await rawData.json();
    const videos = videosJSON?.results;
    return videos?.find((vid) => vid.type === "Trailer") ?? videos[0] ?? null;
  };

  return useQuery({
    queryKey: ["movie-trailer", movie_id],
    queryFn: fetchMovieVideos,
    enabled: !!movie_id,
  });
}

export default useGetMovieTrailer;
