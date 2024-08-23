import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import gota  from '../assets/gota.png';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
    import Button from 'react-bootstrap/Button';
    import { registerUser } from '../actions/actions.jsx';

function Register() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [bloodType, setBloodType] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault()

        const register = await registerUser(name, lastName, gender, birth, country, email, password, rol, bloodType);

        if (register.error) {
            alert("DATOS FALTANTES O ERRÓNEOS");
        } else {
            alert("USUARIO REGISTRADO");
        }

    }

    

    return (
            <MDBContainer fluid>
                <form onSubmit={handleRegister}>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='6'>

                            <MDBCard className='my-4'>

                                <MDBRow className='g-0'>

                                    <MDBCol md='4' className="d-flex align-items-center">
                                        <MDBCardImage src={gota} alt="Sample photo" className="p-2 rounded-start" fluid />
                                    </MDBCol>

                                    <MDBCol md='8'>

                                        <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                            <h1 style={{ color: '#b91616' }}>BloodLink</h1>

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

                                            <MDBRow>

                                                <MDBCol md='6'>
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                </MDBCol>

                                            </MDBRow>

                                            <MDBInput wrapperClass='mb-4' placeholder='País' size='lg' id='form4' type='text' value={country} onChange={e => setCountry(e.target.value)} />
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