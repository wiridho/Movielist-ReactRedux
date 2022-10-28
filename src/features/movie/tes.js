import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// login
export const onLogin = createAsyncThunk("login/onLogin", async (values) => {
	const dataLoad = {
		email: values.email,
		password: values.password,
	};

	try {
		const res = await axios.post(
			"https://notflixtv.herokuapp.com/api/v1/users/login",
			dataLoad
		);

		return res;
	} catch (error) {
		console.log(error);
	}
});

export const postLoginSlice = createSlice({
	name: "login",
	initialState: {
		loading: false,
	},
	reducers: {},
	extraReducers: {
		[onLogin.pending]: (state) => {
			state.loading = true;
		},
		[onLogin.fulfilled]: (state, action) => {
			state.loading = false;
			localStorage.setItem(
				"token",
				JSON.stringify(action.payload.data.data.token)
			);
			localStorage.setItem(
				"name",
				JSON.stringify(action.payload.data.data.first_name)
			);
			localStorage.setItem(
				"image",
				JSON.stringify(action.payload.data.data.image)
			);
			window.location.reload(false);
			alert("Login Succes !")
		},
		[onLogin.rejected]: (state) => {
			state.loading = false;
		},
	},
});

// register
export const onRegister = createAsyncThunk(
	"register/onRegister",
	async (values) => {
		const dataLoad = {
			first_name: values.first_name,
			last_name: values.last_name,
			email: values.email,
			password: values.password,
			password_confirmation: values.confirm_password,
		};

		try {
			const res = await axios.post(
				"https://notflixtv.herokuapp.com/api/v1/users",
				dataLoad
			);

			return res;
		} catch (error) {
			console.log(error);
		}
	}
);

export const postRegisterSlice = createSlice({
	name: "register",
	initialState: {
		loading: false,
	},
	reducers: {},
	extraReducers: {
		[onRegister.pending]: (state) => {
			state.loading = true;
		},
		[onRegister.fulfilled]: (state) => {
			state.loading = false;
			alert("Register Succes !")
		},
		[onRegister.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export const postLogin = postLoginSlice.reducer;
export const postRegister = postRegisterSlice.reducer;