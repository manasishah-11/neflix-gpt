import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    topRatedMovies: null,
    nowPlayingMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  setPopularMovies,
  setTopRatedMovies,
  setNowPlayingMovies,
  setUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
