import React, { useState } from 'react';
import '../Styling/Navigation.css'
import '../Styling/LoginModal.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { GoogleLogin } from '@react-oauth/google';

export default function LoginModal({ setToken }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const request = await axios.post('https://notflixtv.herokuapp.com/api/v1/users/login', {
                email: email,
                password: password
            })
            const responseToken = request.data.data.token
            const dataUser = request.data.data
            localStorage.setItem('token', JSON.stringify(responseToken))
            localStorage.setItem('user', JSON.stringify(dataUser))
            setEmail('')
            setPassword('')
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
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
                                    onSuccess={responseGoogle => {
                                        localStorage.setItem('google_user', responseGoogle.credential)
                                        const token = localStorage.getItem('google_user');
                                        if (token) {
                                            setToken(true);
                                        } else {
                                            setToken(false);
                                        }
                                        handleClose();
                                    }}
                                />
                            </Form>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>
        </>
    )
}
