import React from 'react';
import '../CSS/register.css';
import { Form } from 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer fluid className='h-100'>

      <MDBRow className='h-100 d-flex flex-column align-items-center'>

        <MDBCol md='6' className='text-center text-md-start'>

          <h1 className="my-5 display-3 text-center fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

        </MDBCol>

        <MDBCol md='6' className='d-flex flex-column justify-content-center align-items-center'>

          <MDBCard id='form-cont' className='w-50'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' placeholder='Nombre' id='form1' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' placeholder='Apellido' id='form1' type='text' />
                </MDBCol>
              </MDBRow>

              <Form.Select className='mb-4' aria-label="Default select example">
                <option>Género</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
              </Form.Select>

              <MDBInput wrapperClass='mb-4' placeholder='Fecha de nacimiento' id='form1' type='text' />

              <MDBInput wrapperClass='mb-4' placeholder='País' id='form1' type='text' />

              <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' placeholder='Contraseña' id='form1' type='password' />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Acepto los términos y condiciones' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>Registrarse</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;