
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../CSS/landing.css';
import gota from '../assets/gota.png';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';


const Landing = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div id='landing-cont' style={{height: '100vh'}}>
            <Container className='rounded bg-white'>
                <div className='mt-5 p-3'>
                    <Navbar />
                </div>
                <Row>
                    <Col md={6} className='p-lg-5'>
                        <div className="head_left">
                            <div className="w-75 mt-2 h_title">
                                <h1 style={{ color: '#676767' }}>With Our Nutritious</h1>
                                <h1 style={{ color: '#676767' }}>Meal Plans</h1>
                            </div>
                            <p className='text-secondary'>
                                Discover a world of delicious salad at our online salad paradise. salad meals are ready to eat in a minutes so save time energy.
                            </p>
                            <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                                <Button onClick={handleLoginClick} id='btn-login' className='fw-bold border-0'>Empieza a donar</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="head_right">
                            <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                                <img src={gota} alt="headerr-image" className='head_rightImg' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Landing;