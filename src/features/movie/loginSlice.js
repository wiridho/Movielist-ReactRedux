import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithGoogle, logInWithEmailAndPassword } from "../../firebase";
// import axios from "axios";


export const isLogin = createAsyncThunk(
	'islogin/login', async (values) => {
		// const dataload = {
		//     email: values.email,
		//     password: values.password,
		// }
		try {
			// const req = await axios.post('https://notflixtv.herokuapp.com/api/v1/users/login', dataload)
			// const responseToken = req.data.data.token
			// const dataUser = req.data.data
			const login = await logInWithEmailAndPassword(values.email, values.password)
			//set token
			localStorage.setItem('token', JSON.stringify(login.user.stsTokenManager.accessToken))
			//set user data
			localStorage.setItem('user', JSON.stringify(login.user))
			window.location.reload()
		} catch (error) {
			console.error(error)
		}
	}
)
export const isLoginGoogle = createAsyncThunk(
	'islogin/loginGoogle', async () => {
		try {
			const login = await signInWithGoogle()
			console.log(login)
			//set token 
			localStorage.setItem('token', JSON.stringify(login.accessToken))
			// set token user
			localStorage.setItem('google_user', JSON.stringify(login))
			window.location.reload()
		} catch (error) {
			console.error(error)
		}
	}
)


export const loginSlice = createSlice({
	name: "login",
	initialState: {
		login: [],
		loginGoogle: [],
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
		}, [isLoginGoogle.fulfilled]: (state, { payload }) => {
			state.loginGoogle = payload
		}
	}
})

export default loginSlice.reducer