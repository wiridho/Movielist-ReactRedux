import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styling/Navigation.css'
import '../Styling/app.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


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
                                width="100"
                                className="align-top"
                                alt="Movie List" />
                        </Navbar.Brand>
                        <div className='nav-link'>
                            <Form onSubmit={handleSubmit}>
                                <InputGroup>
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
                        <div className='nav-link'>
                            <Button className='auth login' href="#home">Login</Button>
                            <Button className='auth regist' href="#regist">Regis</Button>
                        </div>
                    </Nav>

                </Container>
            </Navbar>

            {/*             
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <img className="navbar-brand" alt='Logo' src="./logomovie.svg" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse w-100">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto input-wrapper col-5">
                            <li className='col-12'>
                                <form onSubmit={handleSubmit}>
                                    <input type={"text"} className="input-search" placeholder='Input disini' onChange={(e) => setSearch(e.target.value)} />
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item btn-auth btn-login">
                                <a className="nav-link">Login</a>
                            </li>
                            <li className="nav-item btn-auth ms-2 btn-regis">
                                <a className="nav-link">Register</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav> */}

        </div>

    )
}
