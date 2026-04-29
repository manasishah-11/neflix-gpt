import React from "react";

function HeroVideoShimmer() {
  return (
    <div className="absolute inset-0 top-20 sm:top-44 px-4">
      <div className="rounded-md h-10 w-40 animate-shimmer bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%]" />
      <div className="h-12 mt-2">
        <div className="rounded-md h-5 sm:h-6 w-[85%] sm:w-[45%] animate-shimmer bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%]" />
        <div className="rounded-md mt-1 h-5 sm:h-6 w-[85%] sm:w-[45%] animate-shimmer bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%]" />
      </div>
      <div className="space-x-2 mt-5 flex">
        <div className="rounded-md h-8 w-24 animate-shimmer bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%]" />
        <div className="rounded-md h-8 w-24 animate-shimmer bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%]" />
      </div>
    </div>
  );
}

export default HeroVideoShimmer;
