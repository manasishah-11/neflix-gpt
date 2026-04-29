import { useSelector } from "react-redux";
import Header from "../../common/components/Header";
import usePopularMovies from "../../common/hooks/usePopularMovies";
import HeroVideo from "./HeroVideo";
import MovieList from "./MovieList";
import useTopRatedMovies from "../../common/hooks/useTopRatedMovies";
import useNowPlayingMovies from "../../common/hooks/useNowPlayingMovies";
import useUpcomingMovies from "../../common/hooks/useUpcomingMovies";

function Browse() {
  const movies = useSelector((store) => store.movies);
  const { popularMovies, topRatedMovies, nowPlayingMovies, upcomingMovies } =
    movies;

  const { isLoading: loadingNowPlayingMovies } = useNowPlayingMovies();
  const { isLoading: loadingPopularMovies } = usePopularMovies();
  const { isLoading: loadingTopRatedMovies } = useTopRatedMovies();
  const { isLoading: loadingUpcomingMovies } = useUpcomingMovies();

  return (
    <div className="bg-black min-h-screen no-scrollbar">
      <div className="absolute z-10">
        <Header />
      </div>
      <HeroVideo loading={loadingPopularMovies} />
      <div className="-mt-14 sm:-mt-64 relative px-4 pb-4">
        <MovieList
          title="Popular"
          movies={popularMovies}
          loading={loadingPopularMovies}
        />
        <MovieList
          title="Top Rated"
          movies={topRatedMovies}
          loading={loadingTopRatedMovies}
        />
        <MovieList
          title="Now Playing"
          movies={nowPlayingMovies}
          loading={loadingNowPlayingMovies}
        />
        <MovieList
          title="Upcoming"
          movies={upcomingMovies}
          loading={loadingUpcomingMovies}
        />
      </div>
    </div>
  );
}

export default Browse;
