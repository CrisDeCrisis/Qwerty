
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../CSS/landing.css';
import gota from '../assets/gota.png';
import logo from '../assets/logo-bl.png';
import Navbar from './Navbar'
import { PieGraph } from './Pie';
import { useNavigate } from 'react-router-dom';


const Landing = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <Container className='rounded bg-white '>
            <div className='p-3'>
                <Navbar />
            </div>
            <Row>
                <Col md={6} className='p-lg-4'>
                    <div className="head_left w-100 h-100">
                        <div className="w-75 h_title h-100  w-100">
                            <h1 className='rounded bg-danger text-white d-flex justify-content-center'>Dona vida</h1>
                            <h1 className='d-flex justify-content-center'>Comparte esperanza</h1>
                            <div className='w-100 mt-5'>
                                <PieGraph />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="head_right">
                        <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                            <img src={logo} alt="headerr-image" className='head_rightImg' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Landing;