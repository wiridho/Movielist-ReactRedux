import { configureStore } from "@reduxjs/toolkit";
import movieSLice from "../features/movie/movieSLice";
import movieDetailSlice from "../features/movie/movieDetailSlice";
import loginSlice from "../features/movie/authSlice";



export const store = configureStore({
    reducer: {
        movies: movieSLice,
        details: movieDetailSlice,
        login: loginSlice,
    }
})