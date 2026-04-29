import React from "react";
import { useNavigate } from "react-router";

function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="col-span-full mt-16 flex flex-col items-center">
      {/* ICON */}
      <img src="/shuffle.png" alt="shuffle" />
      <h1 className="mt-4 text-white text-2xl sm:text-4xl font-bold">
        Not Sure What to Watch?
      </h1>
      <p className="mt-2 max-w-full sm:max-w-[400px] text-center text-white/80 text-sm sm:text-base">
        Type in the type of movie you want to watch and we will recommend movies
        based on your taste
      </p>
      <div className="mt-10">
        <button
          className="bg-gray-400/80 hover:bg-gray-400/70 transition-colors duration-200 outline-none px-4 py-2 rounded-md text-sm mr-2 text-white"
          onClick={() => navigate("/browse")}
        >
          🌐 Browse Movies
        </button>
      </div>
    </div>
  );
}

export default EmptyState;
