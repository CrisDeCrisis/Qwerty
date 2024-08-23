import React, { useState } from 'react';
import Card from './Card';
import Button from 'react-bootstrap/Button';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../CSS/paginado.css';
import { Row, Col } from 'react-bootstrap';

export const PaginatedList = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;

  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, items.length)
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="container p-4">
      <div className="mb-5">
        <NavBar expand="lg" className="bg-transparent" id="navbar">
          <Container>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <h1 style={{ color: '#b91616' }}>BloodLink</h1>
            <NavBar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center d-flex justify-content-center align-items-center"></Nav>
            </NavBar.Collapse>
          </Container>
        </NavBar>
      </div>
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          <h1 className="fw-bold" style={{ color: '#525252' }}>
            DONANTES COMPATIBLES
          </h1>
        </Col>
      </Row>
      <ul className="d-flex flex-wrap">
        {currentItems.map((user, index) => (
          <li
            className="p-3 col-sm-4 col-md-3 d-flex justify-content-center list-group-item"
            id="card"
            key={index}
          >
            <Card
              NombreUsuario={user.NombreUsuario}
              Pais={user.Pais}
              Roles={user.Roles}
              TipoSangre={user.TipoSangre}
              Email={user.Email}
              className="card"
            />
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-outline-light fw-bold mx-4"
          id="btn-login"
          onClick={prevPage}
          disabled={currentIndex === 0}
        >
          Anterior
        </Button>
        <Button
          className="btn btn-outline-light fw-bold mx-4"
          id="btn-login"
          onClick={nextPage}
          disabled={currentIndex + itemsPerPage >= items.length}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};
