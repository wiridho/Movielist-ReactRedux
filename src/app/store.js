import { configureStore } from "@reduxjs/toolkit";
import movieSLice from "../features/movie/movieSLice";
import movieDetailSlice from "../features/movie/movieDetailSlice";



export const store = configureStore({
    reducer: {
        movies: movieSLice,
        details: movieDetailSlice,
    }
})