import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import { registerUser } from '../actions/actions.jsx';
import logo from '../assets/logo-bl.png';
import '../CSS/register.css';

function Register() {
    // Estados para los campos del formulario
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [bloodType, setBloodType] = useState('');

    const navigate = useNavigate();

    // Maneja el registro del usuario
    const handleRegister = async (e) => {
        e.preventDefault();

        const register = await registerUser(name, lastName, gender, birth, country.name, email, password, rol, bloodType);

        if (register.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!'
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Usuario registrado con éxito",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login');
        }
    };

    return (
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
    );
}

export default Register;