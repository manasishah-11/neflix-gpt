import React from "react";
import MovieCard from "../../common/components/MovieCard";
import MovieCardShimmer from "../../common/components/MovieCardShimmer";

function MovieList({ title, movies, loading }) {
  return (
    <div className="space-y-1">
      <h3 className="text-white text-lg">{title}</h3>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-12 [&:has(.card:hover)>.card:not(:hover)]:opacity-20">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <MovieCardShimmer key={index} />
            ))
          : (movies || []).map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                backdrop_path={movie.backdrop_path}
              />
            ))}
      </div>
    </div>
  );
}

export default MovieList;
