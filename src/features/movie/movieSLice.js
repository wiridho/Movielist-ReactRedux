import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getMovies = createAsyncThunk(
    'movies/getmovies',
    async (apiKey) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            return res.data.results
        } catch (err) {
            console.log(err)
        }
    }
)
export const searchMovie = createAsyncThunk(
    'search/searchMovie',
    async (query) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=39d534102975349064b234a5f47263bb&language=en-US&page=1&include_adult=false&query=${query}`)
            return res.data.results
        } catch (err) {
            console.log(err)
        }
    }
)

export const getGenre = createAsyncThunk(
    'genres/getGenre',
    async (apiKey) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
            return res.data.genres
        } catch (err) {
            console.log(err)
        }
    }
)

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        genre: [],
        movies: [],
        search: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [getMovies.fulfilled]: (state, { payload }) => {
            state.movies = payload
        },
        [getGenre.fulfilled]: (state, { payload }) => {
            state.genre = payload
        },
        [searchMovie.fulfilled]: (state, { payload }) => {
            state.search = payload
        }
    }
}
)
export default movieSlice.reducer