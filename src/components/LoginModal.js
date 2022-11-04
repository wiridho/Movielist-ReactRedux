import React, { useEffect, useState } from 'react';

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Redux
import { useDispatch } from "react-redux";
import { isLogin, isLoginGoogle } from "../features/movie/loginSlice"

// Stylesheet
import '../Styling/Navigation.css';
import '../Styling/LoginModal.css';

// Import Icons
import { BsEnvelope, BsFillEyeSlashFill, BsFillEyeFill, BsGoogle } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";

// React-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function LoginModal({ setToken }) {
	const [user, loading, error] = useAuthState(auth);
	const dispatch = useDispatch();

	// State for showpassword
	const [showPasswords, setShowPassword] = useState(false)

	// 
	const initialValues = { email: '', password: '' }
	const [formValues, setFormValues] = useState(initialValues)
	const [formError, setFormError] = useState({})



	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value })
	}


	// show modal 
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);


	//show click icon password
	const clickIcon = () => setShowPassword(!showPasswords)



	// Handle Submit for Google Login
	const handleSubmitGoogle = async () => {
		try {
			dispatch(isLoginGoogle())
		} catch (error) {
			console.log(error)
		}
		// const token = localStorage.getItem('google_user');
		// if (token) {
		// 	setToken(true);
		// } else {
		// 	setToken(false);
		// }
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		// Validate error
		setFormError(validate(formValues))
		try {
			dispatch(isLogin(formValues))
			// logInWithEmailAndPassword(formValues.email, formValues.password)
		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		const token = localStorage.getItem('token');
		const tokenGoogle = localStorage.getItem('google_user');
		if (token || tokenGoogle) {
			setToken(true);
		} else {
			setToken(false);
		}
		// eslint-disable-next-line
	}, [formError])

	const validate = (values) => {
		const error = {}
		const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		// Check email input
		if (!values.email) {
			error.email = "Email is required!";
		} else if (!reg.test(values.email)) {
			error.email = 'Input a valid email !!!'
		}
		// Check Password input
		if (!values.password) {
			error.email = "Email is required!";
		} else if (values.password.length < 3) {
			error.password = 'Password must be more than 3 characters'
		} else if (values.password.length > 10) {
			error.password = 'Password cannot be longer than 10 characters'
		}
		return error;
	}
	return (
		<>
			<div className=''>
				<Button className='auth login' onClick={handleShow}>Login</Button>
				<Modal
					className='modal_container'
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false} >
					<div className='modal_body'>
						<Modal.Header closeButton>
							<Modal.Title>Log in to your account</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className=''>
								{/* Form Start */}
								<Form onSubmit={handleSubmit}>
									<Form.Group className="mb-3 form-group" controlId="email">
										<Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' value={formValues.email} />
										<BsEnvelope className='icon' />
										<p className='text-danger'>{formError.email}</p>
									</Form.Group>
									<Form.Group className="mb-3 form-group" controlId="password">
										<Form.Control type={(showPasswords === false) ? 'password' : 'text'} placeholder="Password" onChange={handleChange} name='password' value={formValues.password} />
										<div>
											{(showPasswords === false) ? <BsFillEyeSlashFill className='icon' onClick={clickIcon} /> : <BsFillEyeFill className='icon' onClick={clickIcon} />}
										</div>
										<p className='text-danger'>{formError.password}</p>
									</Form.Group>
									<div className='buttonWrapper'>
										<div className="auth-login">
											<Button className='buttonLogin ' variant="danger" type="submit">
												Login
											</Button>
										</div>
									</div>
								</Form>
								{/* Form End */}
								<div className='text-center'>
									<span>Or</span>
									<button className='btn btn-primary auth-google' onClick={handleSubmitGoogle}><img className='logo_google' src='https://www.kibrispdr.org/data/104/download-logo-google-png-9.png' alt='googleLogo' /> Login With Google </button>
								</div>
							</div>
						</Modal.Body>
					</div>
				</Modal>
			</div>
		</>
	)
}
