import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Gamepagedailyjackpot() {
    const settings2 = {
        loop:true,
        items:6,
        margin:40,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            425:{
                items:2,
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
      <div className="daily_jacpot_section spacer">
        <Container fluid>
          <Row>
            <Col>
              <h1>Daily jackpots</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-secondary fs-5 mt-4">
                Aliquam eu libero quis. Purus consequat gravida congue a magna.
              </p>
            </Col>
          </Row>
          <OwlCarousel className="owl-theme" {...settings2}>
            <Col>
              <div className="poart_box">
                <img src={require("./image/party4.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-black fs-3 mt-3 fw-bold">
                    Party Casino{" "}
                  </a>
                  <p className="text-secondary fs-5">
                    Spin into win big at Party Casino slot game.
                  </p>
                  <a href="#" className="text-white fs-5">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="poart_box">
                <img src={require("./image/party5.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-black fs-3 mt-3 fw-bold">
                    The Sword & Grail{" "}
                  </a>
                  <p className="text-secondary fs-5 ">
                    Glory & Honor await you in this popular slot game.
                  </p>
                  <a href="#" className="text-white fs-5">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="poart_box">
                <img src={require("./image/party6.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-black fs-3 mt-3 fw-bold">
                    Hyperburst
                  </a>
                  <p className="text-secondary fs-5">
                    Spin into win big at Party Casino slot game.
                  </p>
                  <a href="#" className="text-white fs-5">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="poart_box">
                <img src={require("./image/party7.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-black fs-3 mt-3 fw-bold">
                    Multifly{" "}
                  </a>
                  <p className="text-secondary fs-5">
                    Spin into win big at Party Casino slot game.
                  </p>
                  <a href="#" className="text-white fs-5">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </Col>
          </OwlCarousel>
          
        </Container>
      </div>
    </>
  );
}

export default Gamepagedailyjackpot;
