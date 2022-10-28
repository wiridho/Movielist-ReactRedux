import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//register 
export const isRegister = createAsyncThunk(
    'isRegister/register', async (values) => {
        console.log(values)
        const dataload = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            password_confirmation: values.password_confirmation
        }
        try {
            const req = await axios.post('https://notflixtv.herokuapp.com/api/v1/users', dataload)
            const token = req.data.data.token
            const dataUser = req.data.data
            //set token
            localStorage.setItem('token', JSON.stringify(token))
            //set data user
            localStorage.setItem('user', JSON.stringify(dataUser))
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }
)

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        login: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [isRegister.pending]: (state) => {
            state.loading = true;
        },
        [isRegister.fulfilled]: (state, { payload }) => {
            state.login = payload
        },
        [isRegister.rejected]: (state) => {
            state.error = true;
        }
    }
})

export default isRegister.reducer