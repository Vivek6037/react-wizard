import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Gamepageoursuggestion() {
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
      <div className="our_suggestion_section py-5">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="mt-5 text-white">Our suggestions</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-white fs-5 mt-4">
                Integer congue nisl neque, sagittis pretium justo egestas sed.
              </p>
            </Col>
          </Row>
          <OwlCarousel className="owl-theme" {...settings2}>
            <Col>
              <div className="poart_box">
                <img src={require("./image/party8.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-white fs-3 mt-3 fw-bold">
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
                <img src={require("./image/party2.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-white fs-3 mt-3 fw-bold">
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
                <img src={require("./image/party9.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-white fs-3 mt-3 fw-bold">
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
                <img src={require("./image/party10.jpg")} alt="" />
                <div className="img_det">
                  <a href="#" className="text-white fs-3 mt-3 fw-bold">
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
          </OwlCarousel>
        </Container>
      </div>
    </>
  );
}

export default Gamepageoursuggestion;
