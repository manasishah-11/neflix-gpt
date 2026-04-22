import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="space-y-1">
      <h3 className="text-white text-lg">{title}</h3>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-12 [&:has(.card:hover)>.card:not(:hover)]:opacity-20">
        {(movies || []).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.original_title}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
