import '../CSS/navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
            <Navbar expand="lg" className="bg-transparent" id='navbar'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <h1 style={{ color: '#b91616' }}>BloodLink</h1>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
                                <Button onClick={handleLoginClick} size="md" id='btn-register' className="mx-2 fw-bold text-decoration-none">Registrarse</Button>
                                <Button onClick={handleLoginClick} size="md" id='btn-login' className="fw-bold text-decoration-none border-0">Ingresar</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Topbar