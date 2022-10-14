import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styling/Navigation.css'
import '../Styling/app.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LoginModal from './LoginModal'
import RegistrasiModal from './RegistrasiModal';


export default function Navigation() {



    const navigate = useNavigate()
    const [search, setSearch] = useState('')


    const handleSubmit = () => {
        navigate(`/search/${search}`)
    }
    return (
        <div className=''>
            <Navbar className='wrapper-nav'>
                <Container className='navbar-container'>
                    <Nav className="navbar-nav w-100 d-flex justify-content-between align-items-center">
                        <Navbar.Brand href="#home" className="mt-3">
                            <img
                                src="/logomovie.svg"
                                width="180"
                                className="align-top"
                                style={{ marginTop: '-10px' }}
                                alt="Movie List" />
                        </Navbar.Brand>
                        <div className='nav-link'>
                            <Form onSubmit={handleSubmit}>
                                <InputGroup className='input-group'>
                                    <Form.Control
                                        className="input-search"
                                        placeholder="What do you want to watch?"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </InputGroup>
                            </Form>
                        </div>
                        <div className='nav-link d-flex'>
                            <LoginModal />
                            <RegistrasiModal />
                        </div>
                    </Nav>

                </Container>
            </Navbar>

        </div>
    )
}
