import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Aboutourteam() {
    const settings2 = {
        loop:true,
        items:6,
        margin:80,
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
                items:4,
                nav:true,
                dots:false,
            },
            1440:{
                items:4,
                nav:true,
                dots:false,
            }
        }    
      };
  return (
    <>
      <div className="our_team_section spacer">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="fw-bold">Our team</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-secondary mt-4">
                Aliquam eu libero quis. Purus consequat gravida congue a magna.
              </p>
            </Col>
          </Row>
          <OwlCarousel className="owl-theme" {...settings2}>
            <Col>
              <div className="our_team_img">
                <img src={require("./image/ourteam1.jpg")} alt="" />
              </div>
              <div className="our_team_det mt-3">
                <a href="#" className="text-black fs-4 fw-bold">
                  Esther Howard
                </a>
                <p>Marketing manager</p>
                <div className="our_team_a">
                  <a href="#" className="link">
                    mail@demolink.com
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="our_team_img">
                <img src={require("./image/ourteam2.jpg")} alt="" />
              </div>
              <div className="our_team_det mt-3">
                <a href="#" className="text-black fs-4 fw-bold">
                  Esther Howard
                </a>
                <p>Marketing manager</p>
                <div className="our_team_a">
                  <a href="#" className="link">
                    mail@demolink.com
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="our_team_img">
                <img src={require("./image/ourteam3.jpg")} alt="" />
              </div>
              <div className="our_team_det mt-3">
                <a href="#" className="text-black fs-4 fw-bold">
                  Esther Howard
                </a>
                <p>Marketing manager</p>
                <div className="our_team_a">
                  <a href="#" className="link">
                    mail@demolink.com
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="our_team_img">
                <img src={require("./image/ourteam4.jpg")} alt="" />
              </div>
              <div className="our_team_det mt-3">
                <a href="#" className="text-black fs-4 fw-bold">
                  Esther Howard
                </a>
                <p>Marketing manager</p>
                <div className="our_team_a">
                  <a href="#" className="link">
                    mail@demolink.com
                  </a>
                </div>
              </div>
            </Col>
          </OwlCarousel>
          {/* <Row>
                        <Col>
                            <div className="our_team_img">
                                <img src={require('./image/ourteam1.jpg')} alt="" />
                            </div>
                            <div className="our_team_det mt-3">
                                <a href="#" className='text-black fs-4 fw-bold'>Esther Howard</a>
                                <p>Marketing manager</p>
                                <div className="our_team_a">
                                    <a href="#" className='link'>mail@demolink.com</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="our_team_img">
                                <img src={require('./image/ourteam2.jpg')} alt="" />
                            </div>
                            <div className="our_team_det mt-3">
                                <a href="#" className='text-black fs-4 fw-bold'>Esther Howard</a>
                                <p>Marketing manager</p>
                                <div className="our_team_a">
                                    <a href="#" className='link'>mail@demolink.com</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="our_team_img">
                                <img src={require('./image/ourteam3.jpg')} alt="" />
                            </div>
                            <div className="our_team_det mt-3">
                                <a href="#" className='text-black fs-4 fw-bold'>Esther Howard</a>
                                <p>Marketing manager</p>
                                <div className="our_team_a">
                                    <a href="#" className='link'>mail@demolink.com</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="our_team_img">
                                <img src={require('./image/ourteam4.jpg')} alt="" />
                            </div>
                            <div className="our_team_det mt-3">
                                <a href="#" className='text-black fs-4 fw-bold'>Esther Howard</a>
                                <p>Marketing manager</p>
                                <div className="our_team_a">
                                    <a href="#" className='link'>mail@demolink.com</a>
                                </div>
                            </div>
                        </Col>
                    </Row> */}
        </Container>
      </div>
    </>
  );
}

export default Aboutourteam;
