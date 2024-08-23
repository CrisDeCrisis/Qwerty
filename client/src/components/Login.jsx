import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardImage
} from 'mdb-react-ui-kit';
import '../CSS/login.css';
import '../CSS/register.css';
import CountrySelect from 'react-bootstrap-country-select';
import Form from 'react-bootstrap/Form';
import logo from '../assets/logo-bl.png';
import { logUser, registerUser } from '../actions/actions.jsx';
import Swal from 'sweetalert2';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const navigate = useNavigate();

    const handleEmailChange = async (e) => {
        e.preventDefault();

        const login = await logUser(email, password);

        if (login.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!'
            });
            return;
        } else {
            navigate('/home');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const register = await registerUser(name, lastName, gender, birth, country.name, email, password, rol, bloodType);

        if (register.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!'
            });
            return;
        } else {
            Swal.fire({
                icon: "success",
                title: "Usuario registrado con éxito",
                showConfirmButton: false,
                timer: 1500
            });
            setShowRegisterModal(false);
            navigate('/login');
        }
    };

    return (
        <MDBContainer fluid style={{ height: '100vh' }}>
            <form onSubmit={handleEmailChange} className='h-100'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard id='login-card' className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <h1 style={{ color: '#b91616' }}>BloodLink</h1>
                                <p className="text-dark-50 mb-5">Por favor ingrese su Correo y Contraseña!</p>
                                <MDBInput wrapperClass='mb-4 mx-5 w-100 border' labelClass='text-white' placeholder='Correo' id='email' value={email} onChange={e => setEmail(e.target.value)} type='email' size="lg" style={{ border: '1px solid #a4a3a3' }} />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100 border' labelClass='text-white' placeholder='Contraseña' id='password' value={password} onChange={e => setPassword(e.target.value)} type='password' size="lg" style={{ border: '1px solid #a4a3a3' }} />
                                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste la contraseña?</a></p>
                                <Button type='submit' id='btn-login' outline className='mx-2 mb-4 px-5' color='danger' size='lg'>
                                    Ingresar
                                </Button>
                                <div>
                                    <p className="mb-0">No tienes una cuenta? <a href="#!" className="text-dark-50 fw-bold" style={{ textDecoration: 'none', color: 'rgba(255, 0, 0, 0.685)' }} onClick={() => setShowRegisterModal(true)}>Registrate</a></p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </form>

            {showRegisterModal && (
                <MDBContainer fluid>
                    <form onSubmit={handleRegister}>
                        <MDBRow className='d-flex justify-content-center align-items-center'>
                            <MDBCol md='6'>
                                <MDBCard className='my-4' id='register-card'>
                                    <MDBRow className='g-0'>
                                        <MDBCol md='4' className="mt-5 d-flex flex-column align-items-center">
                                            <h1 style={{ color: '#b91616' }}>BloodLink</h1>
                                            <MDBCardImage src={logo} alt="Sample photo" className="p-2 rounded-start" fluid />
                                        </MDBCol>
                                        <MDBCol md='8'>
                                            <MDBCardBody className='mt-5 text-black d-flex flex-column justify-content-center'>
                                                <MDBRow>
                                                    <MDBCol md='6'>
                                                        <MDBInput wrapperClass='mb-4' placeholder='Nombre' size='lg' id='form1' type='text' value={name} onChange={e => setName(e.target.value)} />
                                                    </MDBCol>
                                                    <MDBCol md='6'>
                                                        <MDBInput wrapperClass='mb-4' placeholder='Apellido' size='lg' id='form2' type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                                                    </MDBCol>
                                                </MDBRow>
                                                <Form.Select value={gender} onChange={e => setGender(e.target.value)} aria-label="Default select example" className='mb-4'>
                                                    <option>Seleccione su género</option>
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Femenino">Femenino</option>
                                                    <option value="Otro">Otro</option>
                                                </Form.Select>
                                                <MDBInput wrapperClass='mb-4' size='lg' id='form3' type='date' value={birth} onChange={e => setBirth(e.target.value)} />
                                                <CountrySelect className='mb-4' size='lg' value={country} onChange={setCountry} />
                                                <MDBInput wrapperClass='mb-4' placeholder='Correo electrónico' size='lg' id='form5' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                                                <MDBInput wrapperClass='mb-4' placeholder='Contraseña' size='lg' id='form6' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                                                <Form.Select value={rol} onChange={e => setRol(e.target.value)} aria-label="Default select example" className='mb-4'>
                                                    <option>Seleccione un rol</option>
                                                    <option value="Donante">Donante</option>
                                                    <option value="Receptor">Receptor</option>
                                                    <option value="Médico">Médico</option>
                                                </Form.Select>
                                                <Form.Select value={bloodType} onChange={e => setBloodType(e.target.value)} aria-label="Default select example" className='mb-4'>
                                                    <option>Seleccione su grupo sanguíneo</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B+">B+</option>
                                                    <option value="B-">B-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                    <option value="O+">O+</option>
                                                    <option value="O-">O-</option>
                                                </Form.Select>
                                                <div className="d-flex justify-content-end pt-3">
                                                    <Button type='submit' className='ms-2' id='btn-login' size='lg'>Registrarse</Button>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBContainer>
            )}
        </MDBContainer>
    );
}

export default Login;