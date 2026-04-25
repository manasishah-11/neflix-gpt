import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

function MovieCard({ title, backdrop_path }) {
  return (
    <div className="card peer text-white min-w-[300px] w-[300px] cursor-pointer relative hover:scale-125 hover:z-10 origin-top-left transition-transform duration-150">
      {!!backdrop_path ? (
        <img
          src={`${IMAGE_CDN_URL}w300/${backdrop_path}`}
          alt={title}
          className="rounded-md"
        />
      ) : (
        <img
          src="https://media.istockphoto.com/id/1302499179/vector/realistic-3d-film-strip-cinema-on-blue-background-with-place-for-text-modern-3d-isometric.jpg?s=612x612&w=0&k=20&c=ekfhQYcRwVnl-yHeieIHTLXehHUL2bD6ioaGn7Q3Nf4="
          alt={title}
          className="rounded-md w-[300px]"
        />
      )}
      <div className="absolute bottom-0 w-full">
        <div className="bg-gradient-to-b from-black/80 to-black-70 rounded-b-md py-2 px-1">
          <p className="text-center line-clamp-1">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
