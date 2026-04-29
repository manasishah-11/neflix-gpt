import { useSelector } from "react-redux";
import useGetMovieTrailer from "../../common/hooks/useGetMovieTrailer";
import HeroVideoShimmer from "./HeroVideoShimmer";

function HeroVideo({ loading }) {
  const movies = useSelector((store) => store.movies.popularMovies);

  const heroMovie =
    Array.isArray(movies) && movies.length > 0 ? movies[0] : null;

  const { original_title, overview, id } = heroMovie ?? {};

  const { data: trailer, isLoading: loadingTrailer } = useGetMovieTrailer(id);
  const videoUrl = trailer?.key || "";

  return (
    <div className="w-full">
      <div className="relative">
        {/* Video */}
        {loadingTrailer ? (
          <div className="w-full aspect-video flex items-center justify-center">
            <div class="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-400 border-t-transparent"></div>
          </div>
        ) : !!videoUrl ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${videoUrl}`}
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full aspect-square sm:aspect-video opacity-55"
          ></iframe>
        ) : (
          <div className="w-full aspect-video" />
        )}

        {/* Movie Details */}
        {loading ? (
          <HeroVideoShimmer />
        ) : (
          <div className="absolute inset-0 top-20 sm:top-44 px-4">
            <p className="text-white text-2xl sm:text-4xl font-bold">
              {original_title ?? ""}
            </p>
            <p className="mt-2 text-white max-w-[85%] sm:max-w-[45%] text-sm sm:text-base">
              {overview}
            </p>
            <div className="space-x-2 mt-5">
              <button className="bg-white text-black w-24 rounded-md py-1.5 text-sm hover:opacity-80 transition-colors duration-200">
                ▶ Play
              </button>
              <button className="bg-gray-400 text-white w-28 rounded-md py-1.5 text-sm hover:opacity-80 transition-colors duration-200">
                ⓘ More Info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroVideo;
