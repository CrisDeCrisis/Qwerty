import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
}
    from 'mdb-react-ui-kit';
import '../CSS/login.css';
import { logUser } from '../actions/actions.jsx';

function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = async (e) => {
        e.preventDefault()

        const login = await logUser(email, password);

        if (login.error) {
            alert("USUARIO O CONTRASEÑA INCORRECTA");
        } else {
            navigate('/home');
        }

    }

    return (
        <MDBContainer fluid style={{height: '100vh'}}>
            <form onSubmit={handleEmailChange} className='h-100'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard id='login-card' className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h1 style={{ color: '#b91616' }}>BloodLink</h1>
                                <p className="text-dark-50 mb-5">Por favor ingrese su Correo y Contraseña!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100 border' labelClass='text-white' placeholder='Correo' id='email' value={email} onChange={e => setEmail(e.target.value)} type='email' size="lg" style={{ border: '1px solid #a4a3a3' }} />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100 border' labelClass='text-white' placeholder='Contraseña' id='password' value={password} onChange={e => setPassword(e.target.value)} type='password' size="lg" style={{ border: '1px solid #a4a3a3' }} />

                                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Olvidaste la contraseña?</a></p>
                                <Button type='submit' id='btn-login' outline className='mx-2 mb-4 px-5' color='danger' size='lg'>
                                    Ingresar
                                </Button>

                                <div>
                                    <p className="mb-0">No tienes una cuenta? <Link to={'/register'} class="text-dark-50 fw-bold" style={{textDecoration: 'none', color: 'rgba(255, 0, 0, 0.685)'}}>Registrate</Link>
                                    </p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    );
}

export default App; 