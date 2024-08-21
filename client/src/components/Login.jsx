import React from 'react';
import { useState } from 'react';
import '../CSS/login.css';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { logUser } from '../actions/actions.js';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()

        const login = await logUser(email, password);

        if(login.error){
            alert(login.error)
        }else{
            alert(login.message)
        }

    }

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };


    return (
        <form onSubmit={handleSubmit} className="my-5 gradient-form container">

            <MDBRow id='all-cont' className='bg-white rounded h-75'>

                <MDBCol col='6' className="mb-5 h-100">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <p>Inicia sesión</p>


                        <MDBInput wrapperClass='mb-4' placeholder='Email' id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />

                        <MDBInput wrapperClass='mb-4' placeholder='Contraseña' id='pass' type='password' value={password} onChange={e => setPassword(e.target.value)} />

                        <div className="d-flex flex-column align-items-center text-center pt-1 mb-5 pb-1">
                            <button className="mb-4 w-50 bg-primary rounded" id='signIn-btn' type='submit'>Iniciar</button>
                            <a className="text-muted" href="#!">Olvidaste la contraseña?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">No tienes una cuenta?</p>
                            <MDBBtn onClick={handleRegisterClick} outline className='mx-2' color='primary'>
                                Registrarse
                            </MDBBtn>
                        </div>


                    </div>

                </MDBCol>

                <MDBCol col='6' className="h-100 rounded py-2">
                    <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </form>
    );
}

export default Login;