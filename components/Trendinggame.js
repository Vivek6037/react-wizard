import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Trendinggame() {
    const settings = {
        loop:true,
        items:6,
        margin:10,
        nav:true,
        dots:false,
        responsive:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            425:{
                items:2,
                dots:true,
                nav:false,
            },
            768:{
                items:4,
                dots:true,
                nav:false,
            },
            1024:{
                items:6,
                nav:true,
                dots:false,
            },
        }    
      };
    return (
        <>
            <div className="trending_game_section spacer">
                <Container fluid>
                    <Row>
                        <Col><h1>Trending games</h1></Col>
                    </Row>
                    <Row>
                        <Col className='the_best_cols p'><p className='fs-5 text-secondary mt-4 mb-5'>Here is a selection of the latest trending online games available at Hazard.</p></Col>
                    </Row>
                    <OwlCarousel className='owl-theme slider' {...settings}>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd1.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd2.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd3.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd4.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd5.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd6.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd1.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd2.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd3.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd4.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd5.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>
                        <div class='item'>
                            <Col>
                                <div className="trend_game_img">
                                    <img src={require('./image/trd6.jpg')} alt="" />
                                </div>
                                <div className="trend_game_a mt-4">
                                    <a href="#" className='fs-5 text-black fw-bold'>Lord Of The Ocean</a>
                                </div>
                                <div className="trend_game_p text-secondary">
                                    One of the most thrilling slots game available now.
                                </div>
                                <div className="trend_game_icon mt-3">
                                    <a href="#" className='text-black fs-5'><FaArrowRight /></a>
                                </div>
                            </Col>
                        </div>

                    </OwlCarousel>
                </Container>
            </div>
        </>
    )
}

export default Trendinggame