import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";

function Mostplayedgame() {
  return (
    <>
      <div className="most_plated_games spacer">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="fw-bold mb-4">Most played games</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fs-5">
                Discover the most popular games available at our website.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-space-between mt-5 border  border-top-0 overflow-x-auto">
            <Col>
              <p className="fw-bold fs-5">Filter by</p>
            </Col>
            <Col className="d-flex align-items-center">
              <p>
                <a href="#" className="active ms-4">
                  All
                </a>
              </p>
              <p>
                <a href="#" className="text-black ms-4 ">
                  Black jack
                </a>
              </p>
              <p>
                <a href="#" className="text-black ms-4 ">
                  Slots
                </a>
              </p>
              <p>
                <a href="#" className="text-black ms-4 ">
                  Table games
                </a>
              </p>
              <p>
                <a href="#" className="text-black ms-4 ">
                  Roulette
                </a>
              </p>
              <p>
                <a href="#" className="text-black ms-4 ">
                  Poker
                </a>
              </p>
              <p>
                <a href="#" className="text-black ms-4 ">
                  Live casino
                </a>
              </p>
            </Col>
          </Row>
          <div className="overflow-x-auto">
            <Row className="mt-5 px-4 row-cols-1 row-cols-lg-5 row-cols-md-3">
                <Col>
                  <div className="game_img d-flex">
                    <img src={require("./image/game1.jpg")} alt="" />
                    <div className="game_img_det ms-3">
                      <h5 className="fw-bold">Bootleggers</h5>
                      <p className="text-secondary">Easy to learn and play</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="game_price text-center">
                    <h5>$5000</h5>
                    <p className="text-secondary">+100 free spins</p>
                  </div>
                </Col>
                <Col>
                  <div className="game_point text-center">
                    <h5>100</h5>
                    <p className="text-secondary">Free spins no deposit</p>
                  </div>
                </Col>
                <Col>
                  <div className="game_star text-center">
                    <FaStar className="fs-5" />
                    <FaStar className="fs-5" />
                    <FaStar className="fs-5" />
                    <FaStar className="fs-5" />
                    <FaStar className="fs-5" />
                    <p className="text-secondary">Game rating</p>
                  </div>
                </Col>
                <Col>
                  <div className="game_button">
                    <a href="#">
                      <button className="px-4 py-2 border-0 bg-dark text-white fw-bold rounded-5">
                        Get bonus
                      </button>
                    </a>
                  </div>
                </Col>
            </Row>
            <Row className="mt-3 px-4">
              <Col className="d-flex justify-content-between align-items-center gaming border rounded-3 py-2">
                <div className="game_img d-flex">
                  <img src={require("./image/game2.jpg")} alt="" />
                  <div className="game_img_det ms-3">
                    <h5 className="fw-bold">100 Fortunes</h5>
                    <p className="text-secondary">Play online learn slots</p>
                  </div>
                </div>
                <div className="game_price text-center">
                  <h5>$4500</h5>
                  <p className="text-secondary">+200 free spins</p>
                </div>
                <div className="game_point text-center">
                  <h5>200</h5>
                  <p className="text-secondary">Free spins no deposit</p>
                </div>
                <div className="game_star text-center">
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <p className="text-secondary">Game rating</p>
                </div>
                <div className="game_button">
                  <a href="#">
                    <button className="px-4 py-2 border-0 bg-dark text-white fw-bold rounded-5">
                      Get bonus
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="mt-3 px-4">
              <Col className="d-flex justify-content-between align-items-center gaming border rounded-3 py-2">
                <div className="game_img d-flex">
                  <img src={require("./image/game3.jpg")} alt="" />
                  <div className="game_img_det ms-3">
                    <h5 className="fw-bold">Blackjack</h5>
                    <p className="text-secondary">Popular card gaming</p>
                  </div>
                </div>
                <div className="game_price text-center">
                  <h5>$3500</h5>
                  <p className="text-secondary">+350 free spins</p>
                </div>
                <div className="game_point text-center">
                  <h5>350</h5>
                  <p className="text-secondary">Free spins no deposit</p>
                </div>
                <div className="game_star text-center">
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <p className="text-secondary">Game rating</p>
                </div>
                <div className="game_button">
                  <a href="#">
                    <button className="px-4 py-2 border-0 bg-dark text-white fw-bold rounded-5">
                      Get bonus
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="mt-3 px-4">
              <Col className="d-flex justify-content-between align-items-center gaming border rounded-3 py-2">
                <div className="game_img d-flex">
                  <img src={require("./image/game4.jpg")} alt="" />
                  <div className="game_img_det ms-3">
                    <h5 className="fw-bold">Zoom Roulette</h5>
                    <p className="text-secondary">Spiin the firee wheel!</p>
                  </div>
                </div>
                <div className="game_price text-center">
                  <h5>$1500</h5>
                  <p className="text-secondary">+150 free spins</p>
                </div>
                <div className="game_point text-center">
                  <h5>150</h5>
                  <p className="text-secondary">Free spins no deposit</p>
                </div>
                <div className="game_star text-center">
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <FaStar className="fs-5" />
                  <p className="text-secondary">Game rating</p>
                </div>
                <div className="game_button">
                  <a href="#">
                    <button className="px-4 py-2 border-0 bg-dark text-white fw-bold rounded-5">
                      Get bonus
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Mostplayedgame;
