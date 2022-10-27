import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getMovieDetails = createAsyncThunk(
    'detail/getMovieDetails',
    async (id) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=39d534102975349064b234a5f47263bb`)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }
)
export const getMovieCast = createAsyncThunk(
    'detail/getMovieCast',
    async (id) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=39d534102975349064b234a5f47263bb&language=en-US`)
            console.log(res.data.cast)
            return res.data.cast
        } catch (err) {
            console.log(err)
        }
    }
)
const movieDetailSlice = createSlice({
    name: "details",
    initialState: {
        details: [],
        cast: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [getMovieDetails.pending]: (state) => {
            state.loading = true
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.details = action.payload
        }, [getMovieDetails.rejected]: (state) => {
            state.loading = false;
        }, [getMovieCast.fulfilled]: (state, action) => {
            state.cast = action.payload
        }
    }
}
)
export default movieDetailSlice.reducer