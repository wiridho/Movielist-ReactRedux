import React, { useState, useEffect } from 'react';
// 
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import { useDispatch } from "react-redux";
import { isRegister } from "../features/movie/registerSlice"


// Import styling
import '../Styling/RegistrasiModal.css'
import '../Styling/Navigation.css'

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// Import icon 
import { BsFillEyeSlashFill, BsFillEyeFill, BsEnvelope } from 'react-icons/bs'
import { CiUser } from "react-icons/ci";

export default function RegistrasiModal({ setToken }) {
	const [user, loading, error] = useAuthState(auth);
	const dispatch = useDispatch()

	// show modal
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	// State for showpassword
	const [showPasswords, setShowPassword] = useState(false)

	//function click icon
	const clickIcon = () => setShowPassword(!showPasswords)

	// initial values
	const initialValues = { name: '', email: '', password: '' }
	const [formValues, setFormValues] = useState(initialValues)
	const [formError, setFormError] = useState({})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFormError(validate(formValues))
		try {
			dispatch(isRegister(formValues))
			// registerWithEmailAndPassword(formValues.name, formValues.email, formValues.password)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setToken(true);
		} else {
			setToken(false);
		}
		// eslint-disable-next-line
	}, [formError])

	// Validate Form
	const validate = (values) => {
		const error = {}
		const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.name) {
			error.first_name('First Name is required')
		}
		// if (!values.last_name) {
		// 	error.last_name('Last Name is required')
		// }
		// Check email input
		if (!values.email) {
			error.email = "Email is required!";
		} else if (!reg.test(values.email)) {
			error.email = 'Input a valid email !!!'
		}
		// Check Password input
		if (!values.password) {
			error.password = "Password is required!";
		} else if (values.password.length < 3) {
			error.password = 'Password must be more than 3 characters'
		}
		// } else if (values.password !== values.password_confirmation) {
		// 	error.password_confirmation('Password doesnt match')
		// 	error.password('Password doesnt match')
		// }
		// if (!values.password_confirmation) {
		// 	error.password_confirmation('Password confirmation is required !!!')
		// }
		return error;
	}

	return (
		<div>
			<Button className='auth regist	' onClick={handleShow}>Register</Button>
			<Modal
				className='modal_container'
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false} >

				<div className='modal_body'>
					<Modal.Header closeButton>
						<Modal.Title>Register to your account</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={handleSubmit} >
							{/* FirstName */}
							<Form.Group className="mb-3 form-group" controlId="firstName">
								<Form.Control type="text" placeholder="Name" name='name' value={formValues.name} onChange={handleChange} />
								<CiUser className='icon' />
								<p className='text-danger'>{formError.first_name}</p>
							</Form.Group>
							{/* Email */}
							<Form.Group className="mb-3 form-group" controlId="email">
								<Form.Control type="email" placeholder="Email Adress" name='email' value={formValues.email} onChange={handleChange} />
								<BsEnvelope className='icon' />
								<p className='text-danger'> {formError.email}</p>
							</Form.Group>
							{/* Password */}
							<Form.Group className="mb-3 form-group" controlId="password">
								{(showPasswords === false) ? <BsFillEyeSlashFill className='icon' onClick={clickIcon} /> : <BsFillEyeFill className='icon' onClick={clickIcon} />}
								<Form.Control type={(showPasswords === false) ? 'password' : 'text'} placeholder="Password" onChange={handleChange} name='password' value={formValues.password} />
								<p className='text-danger'> {formError.password}</p>
							</Form.Group>
							<Button variant="danger" type="submit">
								Register
							</Button>
						</Form>
					</Modal.Body>
				</div>
			</Modal>
		</div>
	)
}
