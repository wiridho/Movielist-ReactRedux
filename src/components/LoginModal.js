import React, { useState } from 'react';
import '../Styling/Navigation.css'
import '../Styling/LoginModal.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { GoogleLogin } from 'react-google-login';

export default function LoginModal() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const responseGoogle = (response) => {
        const userOAuth = response;
        localStorage.setItem('userOAuth', JSON.stringify(userOAuth))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const request = await axios.post('https://notflixtv.herokuapp.com/api/v1/users/login', {
                email: email,
                password: password
            })
            const dataUser = request.data.data
            localStorage.setItem('dataUser', JSON.stringify(dataUser))
            setEmail('')
            setPassword('')
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Login
                            </Button>
                            <GoogleLogin
                                clientId="104682645216-tb3e262c9t89kr536spqedig8142rssa.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                scope='profile'
                            />
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    )
}
