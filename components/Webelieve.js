import { Container, Row, Col } from 'react-bootstrap';
import { CgCardSpades } from "react-icons/cg";

function Webelieve() {
    return (
        <>
            <div className="we_belive_that_section spacer">
                <Container fluid>
                    <Row>
                        <Col class="we_belive_heading">
                            <h1 className='mb-5'>We believe that gambling should be a safe and enjoyable experience!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='fs-5'>Founded in 2005, Hazard is the national leader in everything that concerns online gambling. Our primary goal is to provide satisfying and safe experience to all our players.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='fs-5'>Whatever your game of choice is, we’ll make sure it is risk-free and entertaining at all times.</p>
                        </Col>
                    </Row>
                    <Row className='mt-5 row-cols-1 row-cols-xl-6 row-cols-lg-3 row-cols-md-3'>
                        <Col>
                            <div className="black_jac_box border rounded-3 text-center pt-3 pb-5 me-3 mb-3">
                                <div className="black_icon"><CgCardSpades classNameblackicon /></div>
                                <div className="black_name fs-4 fw-bold">Blackjack</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="black_jac_box border rounded-3 text-center pt-3 pb-5 me-3 mb-3">
                                <div className="black_icon"><CgCardSpades classNameblackicon /></div>
                                <div className="black_name fs-4 fw-bold">Slots</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="black_jac_box border rounded-3 text-center pt-3 pb-5 me-3 mb-3">
                                <div className="black_icon"><CgCardSpades classNameblackicon /></div>
                                <div className="black_name fs-4 fw-bold">Table games</div>
                            </div>
                        </Col>
                        <Col >
                            <div className="black_jac_box border rounded-3 text-center pt-3 pb-5 me-3 mb-3">
                                <div className="black_icon"><CgCardSpades classNameblackicon /></div>
                                <div className="black_name fs-4 fw-bold">Roulette</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="black_jac_box border rounded-3 text-center pt-3 pb-5 me-3 mb-3 mb-3">
                                <div className="black_icon"><CgCardSpades classNameblackicon /></div>
                                <div className="black_name fs-4 fw-bold">Poker</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="black_jac_box border rounded-3 text-center pt-3 pb-5 me-3 mb-3">
                                <div className="black_icon"><CgCardSpades classNameblackicon /></div>
                                <div className="black_name fs-4 fw-bold">Live casino</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Webelieve