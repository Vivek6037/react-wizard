import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import OwlCarousel from 'react-owl-carousel';


function Letgame() {
    const settings1 = {
        loop:true,
        items:3,
        margin:35,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            425:{
                items:1,
                dots:true,
                nav:false,
            },
            768:{
                items:3,
                dots:true,
                nav:false,
            },
            1024:{
                items:3,
                nav:true,
                dots:false,
            },
            1440:{
                items:3,
                nav:true,
                dots:false,
            }
        }

      };
    return (
        
        <>
            <div className="start_lets_begin_section spacer py-5">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='text-white mt-5 fw-bold let_the_game_bigin'>Let the games begin!</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='fs-5 text-white mt-5 mb-5 let_p'>Choose your next favorite game at Hazard.</p>
                        </Col>
                    </Row>
                    <OwlCarousel className='owl-theme slider' {...settings1}>
                        <div class='item'>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party1.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>Party Casino </a>
                                    <p className='text-secondary fs-5'>Spin into win big at Party Casino slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        </div>
                        <div class='item'>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party2.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>The Sword & The Grail </a>
                                    <p className='text-secondary fs-5 '>Glory & Honor await you in this popular slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        </div>
                        <div class='item'>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party3.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>Party Casino </a>
                                    <p className='text-secondary fs-5'>Spin into win big at Party Casino slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        </div>
                        <div class='item'>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party1.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>Party Casino </a>
                                    <p className='text-secondary fs-5'>Spin into win big at Party Casino slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        </div>
                        <div class='item'>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party2.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>The Sword & The Grail </a>
                                    <p className='text-secondary fs-5 '>Glory & Honor await you in this popular slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        </div>
                        <div class='item'>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party3.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>Party Casino </a>
                                    <p className='text-secondary fs-5'>Spin into win big at Party Casino slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        </div>

                    </OwlCarousel>
                </Container>
            </div>
        </>
    )
}

export default Letgame