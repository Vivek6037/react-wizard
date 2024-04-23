import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Navbar from 'react-bootstrap/Navbar';
import { TbCherryFilled } from "react-icons/tb";



function Footer() {
    return (

        <>
            <footer>
                <Container fluid>
                    <Row className='mb-5 row-cols-1 row-cols-lg-3'>
                        <Col>
                            <ul>
                                <li><a href="#" className='text-secondary mb-2'>Games</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Promotions</a></li>
                                <li><a href="#" className='text-secondary mb-2'>About us</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Blog</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Contact us</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Terms and Conditions</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Privacy Policy</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Payment options</a></li>
                                <li><a href="#" className='text-secondary mb-2'>FAQ</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li><a href="#" className='text-secondary mb-2'>Online Slots</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Online BlackJack</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Live Casino</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Progressive Jackpot</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Video Poker</a></li>
                                <li><a href="#" className='text-secondary mb-2'>Online Roulette</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <Navbar.Brand href="#" className='d-flex align-items-center'>
                                <TbCherryFilled className='cherry' /><h3 className='fw-bold ms-1'>hazard</h3>
                            </Navbar.Brand>
                            <h6 className='fw-bold mt-4 mb-4'>Discover the latest news about our casino & games</h6>
                            <input className='w-100 rounded-2 py-3' type="text" placeholder='Enter your email address' />
                        </Col>
                    </Row>
                    <Row className='mb-4 border-top row-cols-1 row-cols-lg-2'>
                        <Col className='mt-3'>
                            <p>© 2023. Hazard. <a href="#" className='text-black end_footer_a'>Privacy Policy</a></p>
                        </Col>
                        <Col className='text-center mt-3 footer-icons'>
                            <a href="#"><FaYoutube className='footer_icon me-4' /></a>
                            <a href="#"><FaFacebookF className='footer_icon me-4' /></a>
                            <a href="#"><FaInstagram className='footer_icon me-4' /></a>
                            <a href="#"><FaTwitter className='footer_icon me-4' /></a>
                            <a href="#"><FaLinkedinIn className='footer_icon' /></a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer