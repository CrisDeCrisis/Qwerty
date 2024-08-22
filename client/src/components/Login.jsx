import React from 'react';
import { useState } from 'react';
import {
    MDBBtn,
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

    const handleEmailChange = async (e) => {
        e.preventDefault()

        const login = await logUser(email, password);

        if (login.error) {
            alert("USUARIO O CONTRASEÑA INCORRECTA");
        } else {
            alert("BIENVENIDO");
        }

    }

    return (
        <MDBContainer fluid>
            <form onSubmit={handleEmailChange}>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard id='login-card' className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h1 style={{ color: '#b91616' }}>BloodLink</h1>
                                <p className="text-dark-50 mb-5">Please enter your login and password!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100 border' labelClass='text-white' placeholder='Email address' id='email' value={email} onChange={e => setEmail(e.target.value)} type='email' size="lg" style={{ border: '1px solid #a4a3a3' }} />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100 border' labelClass='text-white' placeholder='Password' id='password' value={password} onChange={e => setPassword(e.target.value)} type='password' size="lg" style={{ border: '1px solid #a4a3a3' }} />

                                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                <MDBBtn type='submit' outline className='mx-2 mb-4 px-5' color='danger' size='lg'>
                                    Login
                                </MDBBtn>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" class="text-dark-50 fw-bold">Sign Up</a>
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