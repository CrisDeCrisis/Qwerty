import '../CSS/navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

const Topbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-transparent" id='navbar'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <h1 style={{ color: '#b91616' }}>BloodLink</h1>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
                            <Nav.Link href="#home" className='text-secondary fw-bold'>Home</Nav.Link>
                            <Nav.Link href="#home" className='text-secondary fw-bold'>About Us</Nav.Link>
                            <Nav.Link href="#home" className='text-secondary fw-bold'>Contact</Nav.Link>
                            <Nav.Link href="#home" className='text-secondary fw-bold'>Testimonials</Nav.Link>
                            <Nav.Link href="#home" className='text-secondary fw-bold text-decoration-none border-0'>
                                <Button size="sm" className="bg_login fw-bold text-decoration-none border-0">login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar