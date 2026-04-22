import React from "react";
import { IMAGE_CDN_URL } from "../../common/utils/constants";

function MovieCard({ title, backdrop_path }) {
  return (
    <div className="card peer text-white min-w-[300px] cursor-pointer relative hover:scale-125 hover:z-10 origin-top-left transition-transform duration-150">
      <img
        src={`${IMAGE_CDN_URL}w300/${backdrop_path}`}
        alt={title}
        className="rounded-md"
      />
      <div className="absolute bottom-0 w-full">
        <div className="bg-gradient-to-b from-black/80 to-black-70 rounded-b-md py-2 px-1">
          <p className="text-center">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
