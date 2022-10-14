import React, { useState } from 'react';
import '../Styling/LoginModal.css'
import '../Styling/Navigation.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function RegistrasiModal() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirm] = useState('')

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const request = await axios.post('http://notflixtv.herokuapp.com/api/v1/users', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            })
            const dataUser = request.data.data.token
            localStorage.setItem('dataUser', JSON.stringify(dataUser))
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setPasswordConfirm('')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Button className='auth regist' onClick={handleShow}>Regis</Button>
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email Adress" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password Confirmation" onChange={(e) => setPasswordConfirm(e.target.value)} />
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
