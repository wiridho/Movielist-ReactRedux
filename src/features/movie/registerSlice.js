import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerWithEmailAndPassword } from "../../firebase";


//register 
export const isRegister = createAsyncThunk(
    'isRegister/register', async (values) => {
        // console.log(values)
        // const dataload = {
        //     first_name: values.first_name,
        //     last_name: values.last_name,
        //     email: values.email,
        //     password: values.password,
        //     password_confirmation: values.password_confirmation
        // }
        try {
            // const req = await axios.post('https://notflixtv.herokuapp.com/api/v1/users', dataload)
            const register = await registerWithEmailAndPassword(values.name, values.email, values.password)
            console.log(register.user)
            // const token = req.data.data.token
            // const dataUser = req.data.data
            //set token
            localStorage.setItem('token', JSON.stringify(register.accessToken))
            //set data user
            localStorage.setItem('user', JSON.stringify(register))
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

export default registerSlice.reducer