import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const isLogin = createAsyncThunk(
    'islogin/login', async (values) => {
        console.log(values)
        const dataload = {
            email: values.email,
            password: values.password,
        }
        const req = await axios.post('https://notflixtv.herokuapp.com/api/v1/users/login', dataload)
        const responseToken = req.data.data.token
        const dataUser = req.data.data

        //set token
        localStorage.setItem('token', responseToken)
        //set user data
        localStorage.setItem('user', JSON.stringify(dataUser))
    }
)


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [isLogin.pending]: (state) => {
            state.loading = true;
        },
        [isLogin.fulfilled]: (state, { payload }) => {
            state.login = payload
        },
        [isLogin.rejected]: (state) => {
            state.error = true;
        }
    }
})

export default loginSlice.reducer