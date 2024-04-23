import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import OwlCarousel from "react-owl-carousel";

function Gamepagetrendinggamee() {
    const settings = {
        loop:true,
        items:4,
        margin:40,
        nav:true,
        dots:false,
        responsive:true,
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
      <div className="new_game_section spacer py-5 text-white">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="mt-5">New games</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fs-5 mt-4">
                Integer congue nisl neque, sagittis pretium justo egestas sed.
              </p>
            </Col>
          </Row>

          <OwlCarousel className="owl-theme" {...settings}>
            <Col>
              <div className="poart_box">
                <img src={require("./image/party1.jpg")} alt="" />
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
                <img src={require("./image/party3.jpg")} alt="" />
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
                <img src={require("./image/party1.jpg")} alt="" />
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
          {/* <Row className='mt-5 mb-5'>
                        <Col >
                            <div className="poart_box">
                                <img src={require('./image/party1.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>Party Casino </a>
                                    <p className='text-secondary fs-5'>Spin into win big at Party Casino slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="poart_box">
                                <img src={require('./image/party2.jpg')} alt="" />
                                <div className="img_det">
                                    <a href="#" className='text-white fs-3 mt-3 fw-bold'>The Sword & Grail </a>
                                    <p className='text-secondary fs-5 '>Glory & Honor await you in this popular slot game.</p>
                                    <a href="#" className='text-white fs-5'><FaArrowRight /></a>
                                </div>
                            </div>
                        </Col>
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
                    </Row> */}
        </Container>
      </div>
    </>
  );
}

export default Gamepagetrendinggamee;
